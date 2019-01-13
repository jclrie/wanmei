package com.zhenxl.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.zhenxl.commonutil.JsonMsg;
import com.zhenxl.pojo.User;
import com.zhenxl.pojo.UserExample;
import com.zhenxl.service.UserService;

@Controller
public class UserController {
	@Autowired
	private UserService userService;
	
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
	
}
