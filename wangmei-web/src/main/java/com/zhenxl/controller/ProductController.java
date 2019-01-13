package com.zhenxl.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.zhenxl.commonutil.JsonMsg;
import com.zhenxl.commonutil.ReturnMsg;
import com.zhenxl.pojo.Attribute;
import com.zhenxl.pojo.AttributeExample;
import com.zhenxl.pojo.Categery;
import com.zhenxl.pojo.Product;
import com.zhenxl.pojo.Productkuid;
import com.zhenxl.pojo.ProductkuidView;
import com.zhenxl.service.AttributeService;
import com.zhenxl.service.CategeryService;
import com.zhenxl.service.ProductService;
import com.zhenxl.service.ProductkuidService;



@Controller
public class ProductController {
	@Autowired 
	private ProductService productService;
	@Autowired
	private ProductkuidService productkuidService;
	@Autowired
	private AttributeService attributeService;
	@Autowired
	private CategeryService categeryService;
	@RequestMapping("/productAddShow")
	public String productAddShow() {
		return "productadd";
	}
	@RequestMapping("/productAdd")
	@ResponseBody
	public ReturnMsg productAdd(Product product) {
		ReturnMsg msg = new ReturnMsg();
		try {
			productService.insert(product);
			productService.deletByPrimaryKeyRedis(product.getPid());
			msg.setMessage("success！");
			msg.setError(0);
		}catch(Exception e) {
			msg.setMessage("failure！");
			msg.setError(1);
		}
		return msg;
	}
	@RequestMapping("productUpdate")
	public String ProductUpdate(Product product) {
		productService.updateByPrimaryKey(product);
		productService.deletByPrimaryKeyRedis(product.getPid());
		return "forward:/indexview";
	}
	@RequestMapping("/productDelete")
	public String productDelete(int pid) {
		productService.deleteByPrimaryKey(pid);
		productService.deletByPrimaryKeyRedis(pid);

		return "forward:/indexview";
	}
	@RequestMapping("/productUpdateShow")
	public String productUpdate(int pid,Model model) {
		JsonMsg msg = new JsonMsg();
		Product product = productService.selectByPrimaryKey(pid);
		Categery category = categeryService.selectByPrimaryKey(product.getCid());
		model.addAttribute("product", product);
		model.addAttribute("category", category);
		return "productUpdate";
	}
	@RequestMapping("/kuidAddShow")
	public ModelAndView kuidAddShow(int pid) {
		Product product = productService.selectByPrimaryKey(pid);
		AttributeExample example = new AttributeExample();
		example.createCriteria().andCidEqualTo(product.getCid());
		List<Attribute> attributes = attributeService.selectByExample(example);
		ModelAndView mav = new ModelAndView();
		mav.setViewName("kuidAdd");
		mav.addObject("product", product);
		mav.addObject("attrs", attributes);
		return mav;
	}
	@RequestMapping("/kuidAdd")
	@ResponseBody
	public JsonMsg kuidAdd(Productkuid productkuid) {
		JsonMsg msg = new JsonMsg();
		try {
			productkuidService.insert(productkuid);
			msg.setCode(200);
			msg.setMsg("success！");
		}catch(Exception e) {
			msg.setCode(500);
			msg.setMsg("failure！");
		}
		return msg;
	}

	@RequestMapping("/kuidShow")
	public ModelAndView kuidShow(int pid) {
		ModelAndView mav = new ModelAndView();
		Product product = productService.selectByPrimaryKey(pid);
		AttributeExample example = new AttributeExample();
		example.createCriteria().andCidEqualTo(product.getCid());
		List<Attribute> attribute = attributeService.selectByExample(example);
		List<ProductkuidView> kuidView = productkuidService.selectByProduct(product);
		mav.addObject("kuidView", kuidView);
		if(!attribute.isEmpty()) {
			mav.addObject("productKUID", attribute.get(0));
		}
		mav.addObject("product", product);
		mav.setViewName("productKUID");
		return mav;
	}
	
	@RequestMapping("/updateProductkuid")
	@ResponseBody
	public JsonMsg updateProductkuid(@RequestBody List<Productkuid> list) {
		JsonMsg msg = new JsonMsg();
		try{
			productkuidService.insertAll(list);
			productkuidService.deletByPrimaryKeyRedis(list.get(0).getPid());
			msg.setCode(200);
			msg.setMsg("success!");
		}catch(Exception e) {
			msg.setCode(500);
			msg.setMsg("failure!");
			e.printStackTrace();
		}
		return msg;
	}

}
