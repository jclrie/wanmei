package com.zhenxl.ui.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.zhenxl.pojo.Product;
import com.zhenxl.pojo.ProductExample;
import com.zhenxl.pojo.ProductkuidView;
import com.zhenxl.ui.dao.JedisDao;
import com.zhenxl.ui.dao.impl.JedisDaoImpl;
import com.zhenxl.ui.service.ProductService;
import com.zhenxl.ui.service.ProductkuidService;

@Controller
public class ProductController {
	@Autowired
	private ProductService productService;
	@Autowired
	private ProductkuidService productkuidService;
	
	@RequestMapping(value="productview")
	public String productView(Model model,@RequestParam(defaultValue="5") int cid,
			@RequestParam(defaultValue="0") int orderBy) {
		ProductExample example = new ProductExample();
		example.createCriteria().andCidEqualTo(cid);
		if(orderBy==1) {
			example.setOrderByClause("price asc");
		}
		List<Product> productList = productService.selectByExample(example);
		model.addAttribute("products", productList);
		return "productlist";
	}
	@RequestMapping(value="prodetailView")
	public String prodetailView(Model model,int pid) {
		JedisDao jedisDao = new JedisDaoImpl();
		Product product = productService.selectByPrimaryKey(pid);
		List<ProductkuidView> kuidView = productkuidService.selectByProduct(product);
		model.addAttribute("product", product);
		model.addAttribute("kuidView", kuidView);
		return "productdetail";
	}
}
