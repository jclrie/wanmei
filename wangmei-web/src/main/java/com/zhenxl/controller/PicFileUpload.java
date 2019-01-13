package com.zhenxl.controller;


import java.io.File;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.zhenxl.commonutil.ImageUitl;
import com.zhenxl.commonutil.ReturnMsg;

@Controller
@RequestMapping("/pic")
public class PicFileUpload {

	@RequestMapping(value="/upload",produces=MediaType.TEXT_PLAIN_VALUE)
	@ResponseBody
	public String fileUpload(@RequestParam("uploadFile") MultipartFile uploadFile,
			HttpServletRequest request,HttpServletResponse response) throws JsonProcessingException {
		//1、获取上传文件名称
		String fileName =uploadFile.getOriginalFilename();
		//2、上传文件名称重命名
		String newFileName = ImageUitl.newFileName(fileName);
		//3、获取上传真实逻辑upload文件夹中
		String realPath = request.getServletContext().getRealPath("upload");
		//4、上传操作
		String path = realPath + "/"+newFileName;
		
		File file = new File(path);
		ReturnMsg msg=new ReturnMsg();//返回上传是否成功状态的对象
		try {
			uploadFile.transferTo(file);
			msg.setError(0);
			msg.setUrl("/upload/"+newFileName);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			msg.setError(1);
			msg.setMessage("上传失败");
		} 
		//5、返回对象设置
		ObjectMapper objMapper = new ObjectMapper();
		return objMapper.writeValueAsString(msg);
		
	}
}
