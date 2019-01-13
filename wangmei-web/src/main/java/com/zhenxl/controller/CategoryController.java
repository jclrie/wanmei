package com.zhenxl.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.zhenxl.service.CategeryService;

@Controller
public class CategoryController {
	@Autowired
	private CategeryService categeryService;
	@RequestMapping(value="/catree")
	@ResponseBody
	public Object getCategoryTreeViewNodes() {
		return categeryService.getUITreeView();
	}
	
	@RequestMapping(value="/categoryAdd")
	public String categoryAdd() {
		return "categoryAdd";
	}
}
