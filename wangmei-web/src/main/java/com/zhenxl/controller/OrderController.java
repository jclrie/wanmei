package com.zhenxl.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.zhenxl.service.OrderProductService;

@Controller
public class OrderController {
	@Autowired
	private OrderProductService orderProductService;
	@RequestMapping("/orderDelete")
	public String orderDelete(String oid) {
		orderProductService.deleteByPrimaryKey(oid);
		return "forward:/orderProductView";
	}
}
