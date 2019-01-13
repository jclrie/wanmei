package com.zhenxl.ui.service.impl;

import java.util.List;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.alibaba.druid.support.json.JSONUtils;
import com.zhenxl.commonutil.JsonUtils;
import com.zhenxl.mapper.ProductMapper;
import com.zhenxl.pojo.Product;
import com.zhenxl.pojo.ProductExample;
import com.zhenxl.ui.dao.JedisDao;
import com.zhenxl.ui.service.ProductService;

@Service
public class ProductServiceImpl implements ProductService {
	@Autowired
	private ProductMapper productMapper;
	@Autowired
	private JedisDao jedisDao;
	@Value("${REDIS_PRODUCT}")
	private String REDIS_PRODUCT;
	@Override
	public int countByExample(ProductExample example) {
		// TODO Auto-generated method stub
		return 0;
	}
	@Override
	public int deleteByExample(ProductExample example) {
		// TODO Auto-generated method stub
		return 0;
	}
	@Override
	public int deleteByPrimaryKey(Integer pid) {
		// TODO Auto-generated method stub
		return 0;
	}
	@Override
	public int insert(Product record) {
		// TODO Auto-generated method stub
		return 0;
	}
	@Override
	public int insertSelective(Product record) {
		// TODO Auto-generated method stub
		return 0;
	}
	@Override
	public List<Product> selectByExample(ProductExample example) {
		return productMapper.selectByExample(example);
	}
	@Override
	public Product selectByPrimaryKey(Integer pid) {
		String productKey = REDIS_PRODUCT+pid;
		String value = jedisDao.get(productKey);
		Product product = null;
		if(StringUtils.isNotBlank(value)) {
			product = JsonUtils.jsonToPojo(value, Product.class);
		}else {
			product = productMapper.selectByPrimaryKey(pid);
			String productValue = JsonUtils.objectToJson(product);
			jedisDao.set(productKey, productValue);
		}
		return product;
	}
	@Override
	public int updateByExampleSelective(Product record, ProductExample example) {
		// TODO Auto-generated method stub
		return 0;
	}
	@Override
	public int updateByExample(Product record, ProductExample example) {
		// TODO Auto-generated method stub
		return 0;
	}
	@Override
	public int updateByPrimaryKeySelective(Product record) {
		// TODO Auto-generated method stub
		return 0;
	}
	@Override
	public int updateByPrimaryKey(Product record) {
		// TODO Auto-generated method stub
		return 0;
	}

}
