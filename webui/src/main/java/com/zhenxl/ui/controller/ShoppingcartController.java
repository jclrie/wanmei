package com.zhenxl.ui.controller;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.List;

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

import com.alibaba.druid.sql.dialect.oracle.ast.clause.ModelClause.ReturnRowsClause;
import com.zhenxl.commonutil.JsonMsg;
import com.zhenxl.commonutil.JsonUtils;
import com.zhenxl.pojo.Product;
import com.zhenxl.pojo.Productkuid;
import com.zhenxl.pojo.ProductkuidExample;
import com.zhenxl.ui.pojo.CartItem;
import com.zhenxl.ui.service.ProductService;
import com.zhenxl.ui.service.ProductkuidService;

@Controller
public class ShoppingcartController {
	@Value(value="${CART_ITEM}")
	private String CART_ITEM;
	
	@Autowired
	private ProductService productService;
	
	@Autowired
	private ProductkuidService productkuidService;
	
	@RequestMapping(value="cartView")
	public String cartView(HttpServletRequest request) {
		List<CartItem> cookies = getCookies(request);
		request.setAttribute("carts", cookies);
		return "shoppingcart";
	}
	@RequestMapping(value="getcart")
	@ResponseBody
	public List<CartItem> getcart(HttpServletRequest request) {
		List<CartItem> cookies = getCookies(request);
		return cookies;
	}
	
	@RequestMapping(value="addCart")
	@ResponseBody
	public JsonMsg addCart(CartItem cartItem,Integer num,
				HttpServletRequest request,HttpServletResponse response) {
		JsonMsg jsonMsg = new JsonMsg();
		Product product = productService.selectByPrimaryKey(cartItem.getId());
		Productkuid productkuid = productkuidService.selectByPrimaryKey(cartItem.getKuid());
		cartItem.setProduct(product);
		cartItem.setNum(num);
		cartItem.setProductKuid(productkuid);
		List<CartItem> list =getCookies(request);
		if(getCookies(request)==null) {
			list = new ArrayList<>();
			list.add(cartItem);
		}else {
			boolean isRep = false;
			for(CartItem item:list) {
				if(item.getKuid() == cartItem.getKuid()) {
					if(productkuid.getStorenum()>=item.getNum()+num) {
						item.setNum(item.getNum()+num);
					}else {
						item.setNum(productkuid.getStorenum());
					}
					isRep = true;
					break;
				}
			}
			if(!isRep) {
				list.add(cartItem);
			}
		}
		boolean state = addCookies(list, response,request);
		if(state) {
			jsonMsg.setCode(200);
			jsonMsg.setObject(list.size());
			jsonMsg.setMsg("添加成功！");
		}else {
			jsonMsg.setCode(500);
			jsonMsg.setMsg("添加失败！");
		}
		
		return jsonMsg;
	}
	
	public boolean addCookies(List<CartItem> cartItems,HttpServletResponse response,HttpServletRequest request) {
		String val = JsonUtils.objectToJson(cartItems);
		String urlEncode = "";
		boolean state = true;
		try{
			urlEncode = URLEncoder.encode(val, "utf-8");
			Cookie c = new Cookie(CART_ITEM, urlEncode);
			c.setMaxAge(24*3600);
			c.setPath("/");
			response.addCookie(c);
		}catch (Exception e) {
			state = false;
			e.printStackTrace();
		}
		return state;
	}
	/**
	 * 	获取cookies
	 * @param request
	 * @return
	 */
	public List<CartItem> getCookies(HttpServletRequest request) {
		List<CartItem> list = null;
		Cookie[] cookies = request.getCookies();
		try {
			for (Cookie cookie : cookies) {
				if (cookie.getName().equals(CART_ITEM)) {
					String val = cookie.getValue();
					String urlDecode = URLDecoder.decode(val, "utf-8");
					list = JsonUtils.jsonToList(urlDecode, CartItem.class);
				}
			} 
		} catch (Exception e) {
			e.printStackTrace();
		}
		return list;
	}
	@RequestMapping("delCart")
	public void delCart(Integer kuid,HttpServletRequest request,HttpServletResponse response) {
		List<CartItem> newList = new ArrayList<>();
		List<CartItem> list = getCookies(request);
		for(CartItem item:list) {
			if(item.getKuid()!=kuid) {
				newList.add(item);
			}
		}
		addCookies(newList, response,request);
	}
	@RequestMapping("delListCart")
	public void delListCart(Integer[] kuids,HttpServletRequest request,HttpServletResponse response) {
		List<CartItem> list = getCookies(request);
		for(Integer kuid:kuids) {
			for(CartItem item:list) {
				if(item.getKuid()==kuid) {
					list.remove(item);
					break;
				}
			}
		}
		addCookies(list, response,request);
	}
	@RequestMapping("updateCart")
	public void updateCart(Integer kuid,Integer num,HttpServletRequest request,HttpServletResponse response) {
		List<CartItem> list = getCookies(request);
		for(CartItem item:list) {
			if(item.getKuid()==kuid) {
				item.setNum(num);
			}
		}
		addCookies(list, response,request);
	}
}
