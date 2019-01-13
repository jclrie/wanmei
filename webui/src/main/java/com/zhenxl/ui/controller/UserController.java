package com.zhenxl.ui.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.zhenxl.commonutil.JsonMsg;
import com.zhenxl.commonutil.SecurityUtils;
import com.zhenxl.pojo.User;
import com.zhenxl.pojo.UserExample;
import com.zhenxl.ui.dao.JedisDao;
import com.zhenxl.ui.service.UserService;

@Controller
public class UserController {
	@Autowired
	private UserService userService;
	@Autowired
	private JedisDao jedisDao;
	
	@Value("${REDIS_LOGIN_KEY}")
	private String REDIS_LOGIN_KEY;
	@RequestMapping("CheckID")
	@ResponseBody
	public JsonMsg phoneCheck(String id,int type) {
		JsonMsg msg = new JsonMsg();
		UserExample example = new UserExample();
		if(type==0) {
			example.createCriteria().andTelEqualTo(id);
		}
		if(type==1) {
			example.createCriteria().andEmailEqualTo(id);
		}
		List<User> selectByExample = userService.selectByExample(example);
		if(selectByExample.isEmpty()) {
			msg.setCode(200);
		}else {
			msg.setCode(500);
		}
		return msg;
	}
	@RequestMapping(value="registerView")
	public String regsiterView(@RequestParam(defaultValue="0") Integer type,Model model) {
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
	@RequestMapping("loginView")
	public String loginView(String returnUrl,Model model,HttpServletRequest request) {
		model.addAttribute("returnUrl", returnUrl);
		return "login";
	}
	@RequestMapping("checkIsLogin")
	@ResponseBody
	public JsonMsg checkIsLogin(String token) {
		JsonMsg msg = new JsonMsg();
		User user = userService.getRedisByToken(token);
		if(user==null) {
			msg.setCode(200);
		}else {
			msg.setCode(500);
			msg.setObject(user);
		}
		return msg;
	}
	
	@RequestMapping("logout")
	public String logout(String token) {
		JsonMsg msg = new JsonMsg();
		msg = userService.logout(token);
		return "redirect:productview";
	}
	@RequestMapping("/dologin")
	@ResponseBody
	public JsonMsg dologin(String uname,String pwd,HttpServletResponse response,HttpServletRequest request) {
		JsonMsg msg = new JsonMsg();
		if(userService.getCheckUser(uname, SecurityUtils.md5Hex(pwd), response, request)==null) {
			msg.setCode(500);
			msg.setMsg("用户名或密码错误");
		}else {
			msg.setCode(200);
			msg.setMsg("登录成功");
		}
		Map map = new HashMap<>();
		map.put("token", request.getAttribute("token"));
		map.put("returnUrl", request.getAttribute("returnUrl"));
		msg.setObject(map);
		return msg;
	}
}
