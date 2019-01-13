package com.zhenxl.controller;

import java.util.Enumeration;
import java.util.List;
import java.util.UUID;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.mysql.jdbc.interceptors.SessionAssociationInterceptor;
import com.zhenxl.commonutil.JsonMsg;
import com.zhenxl.commonutil.JsonUtils;
import com.zhenxl.commonutil.SecurityUtils;
import com.zhenxl.pojo.Address;
import com.zhenxl.pojo.Categery;
import com.zhenxl.pojo.OrderProduct;
import com.zhenxl.pojo.Product;
import com.zhenxl.pojo.ProductExample;
import com.zhenxl.pojo.Productpic;
import com.zhenxl.pojo.User;
import com.zhenxl.pojo.UserExample;
import com.zhenxl.service.AddressService;
import com.zhenxl.service.CategeryService;
import com.zhenxl.service.OrderProductService;
import com.zhenxl.service.ProductService;
import com.zhenxl.service.ProductpicService;
import com.zhenxl.service.UserService;

import aj.org.objectweb.asm.Type;
import redis.clients.jedis.Jedis;
import redis.clients.jedis.JedisPool;

@Controller
public class IndexController {
	@Autowired
	private JedisPool jedisPool;
	@Autowired
	private ProductService productService;
	@Autowired
	private ProductpicService productpicService;
	@Autowired
	private CategeryService categeryService;
	@Autowired
	private AddressService addressService;
	@Autowired
	private OrderProductService orderProductService;
	@Autowired
	private UserService userService;
	@RequestMapping("loginView")
	public String loginView(@RequestParam(defaultValue="0") Integer type,Model model,HttpServletRequest request) {
		model.addAttribute("type", type);
		HttpSession session = request.getSession();
		System.out.println(session+"--"+session.getId());
		System.out.println(session.getAttribute("user"));
		return "login";
	}
	@RequestMapping("logout")
	public String logout(HttpServletRequest request) {
		Cookie[] cookies = request.getCookies();
		for(Cookie cookie:cookies) {
			if(cookie.getName().equals("TOKEN_COOKIE_ADMIN")) {
				jedisPool.getResource().del("REDIS_LOGIN_KEY_ADMIN_"+cookie.getValue());
			}
		}
		return "forward:loginView";
	}
	@RequestMapping("login")
	@ResponseBody
	public JsonMsg login(User user,HttpSession session,@RequestParam(defaultValue="0")Integer type,
			HttpServletResponse response) {
		JsonMsg msg = new JsonMsg();
		UserExample example = new UserExample();
		if(type==1) {//邮箱登录
			example.createCriteria().andEmailEqualTo(user.getEmail()).
			andPasswordEqualTo(SecurityUtils.md5Hex(user.getPassword()));
		}
		if(type==0) {//手机号登录
			example.createCriteria().andTelEqualTo(user.getTel()).
			andPasswordEqualTo(SecurityUtils.md5Hex(user.getPassword()));
		}
		List<User> list = userService.selectByExample(example);
		if(list.isEmpty()) {
			msg.setCode(500);
			msg.setMsg("用户名或密码错误！");
		}else {
			msg.setCode(200);
			msg.setMsg("登录成功！");
			
			String token = UUID.randomUUID().toString();
			//将用户信息保存在redis中，相当于在服务器端创建的session对象
			String jedisKey = "REDIS_LOGIN_KEY_ADMIN"+"_"+token;
			String jsonValue=JsonUtils.objectToJson(user);
			Jedis jedis = jedisPool.getResource();
			jedis.set(jedisKey, jsonValue);
			jedis.expire(jedisKey, 1800);//设置过期时间
			
			//将token放到cookie中
			Cookie cookie = new Cookie("TOKEN_COOKIE_ADMIN",token);
			cookie.setPath("/");
			response.addCookie(cookie);
		}
		return msg;
	}
	@RequestMapping("registerShow")
	public String registerShow(Model model,@RequestParam(defaultValue="0")String type) {
		model.addAttribute("type", type);
		return "register";
	}
	@RequestMapping("register")
	@ResponseBody
	public JsonMsg register(User user) {
		JsonMsg msg = new JsonMsg();
		try {
			user.setPassword(SecurityUtils.md5Hex(user.getPassword()));
			userService.insert(user);
			msg.setCode(200);
			msg.setMsg("注册成功");
		}catch(Exception e) {
			e.printStackTrace();
			msg.setCode(500);
			msg.setMsg("注册失败");
		}
		return msg;
	}
	
	@RequestMapping("indexview")
	public ModelAndView indexView(@RequestParam(value="pageNum",defaultValue="1") Integer pageNum) {
		ModelAndView mav = new ModelAndView();
		//分页
		PageHelper.startPage(pageNum,5);
		List<Product> list = productService.selectByExample(null);
		PageInfo page = new PageInfo<>(list);
		mav.setViewName("index");
		mav.addObject("page", page);
		return mav;
	}
	
	@RequestMapping("productPicView")
	public ModelAndView productPicView(@RequestParam(value="pageNum",defaultValue="1") Integer pageNum) {
		ModelAndView mav = new ModelAndView();
		PageHelper.startPage(pageNum,1);
		List<Productpic> list = productpicService.selectByExample(null);
		PageInfo page = new PageInfo<>(list);
		mav.setViewName("productpic/productpic_list");
		mav.addObject("page", page);
		return mav;
	}
	@RequestMapping("categoryView")
	public ModelAndView categoryView(@RequestParam(value="pageNum",defaultValue="1") Integer pageNum) {
		ModelAndView mav = new ModelAndView();
		PageHelper.startPage(pageNum,5);
		List<Categery> list = categeryService.selectByExample(null);
		PageInfo page = new PageInfo<>(list);
		mav.setViewName("categery/categery_list");
		mav.addObject("page", page);
		return mav;
	}
	@RequestMapping("addressView")
	public ModelAndView addressView(@RequestParam(value="pageNum",defaultValue="1") Integer pageNum) {
		ModelAndView mav = new ModelAndView();
		PageHelper.startPage(pageNum,5);
		List<Address> list = addressService.selectByExample(null);
		PageInfo page = new PageInfo<>(list);
		mav.setViewName("address/address_list");
		mav.addObject("page", page);
		return mav;
	}
	@RequestMapping("orderProductView")
	public ModelAndView orderProductView(@RequestParam(value="pageNum",defaultValue="1") Integer pageNum) {
		ModelAndView mav = new ModelAndView();
		PageHelper.startPage(pageNum,5);
		List<OrderProduct> list = orderProductService.selectByExample(null);
		PageInfo page = new PageInfo<>(list);
		mav.setViewName("orderProduct/orderProduct_list");
		mav.addObject("page", page);
		return mav;
	}
}
