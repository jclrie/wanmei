package com.zhenxl.ui.controller;

import java.net.URLDecoder;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.zhenxl.commonutil.JsonUtils;
import com.zhenxl.pojo.User;
import com.zhenxl.ui.pojo.CartItem;
import com.zhenxl.ui.service.UserService;

@Controller
@RequestMapping("/order")
public class OrderController {
	@Value(value="${CART_ITEM}")
	private String CART_ITEM;
	
	@Autowired
	private UserService userService;
	
	@RequestMapping("/payResultView")
	public String payResultView() {
		return "payresult";
	}
	@RequestMapping("/payView")
	public String payView(Integer[] kuids,String token,HttpServletRequest request) {
		List<CartItem> cookies = getCookies(request);
		List<CartItem> result = new ArrayList<>();
		for(Integer kuid:kuids) {
			for(CartItem item:cookies) {
				if(item.getKuid()==kuid) {
					result.add(item);
					break;
				}
			}
		}
		User user = userService.getRedisByToken(token);
		request.setAttribute("carts", result);
		request.setAttribute("user", user);
		return "pay";
	}
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
}
