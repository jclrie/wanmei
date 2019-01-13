package com.zhenxl.ui.service.impl;

import java.util.List;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.zhenxl.commonutil.JsonUtils;
import com.zhenxl.mapper.ProductkuidMapper;
import com.zhenxl.pojo.Product;
import com.zhenxl.pojo.Productkuid;
import com.zhenxl.pojo.ProductkuidExample;
import com.zhenxl.pojo.ProductkuidView;
import com.zhenxl.ui.dao.JedisDao;
import com.zhenxl.ui.service.ProductkuidService;
@Service
public class ProductkuidServiceImpl implements ProductkuidService{
	@Autowired
	private ProductkuidMapper productkuidMapper;
	@Autowired
	private JedisDao jedisDao;
	@Value("${REDIS_ATTRIBUTE_VALUE}")
	private String REDIS_ATTRIBUTE_VALUE;
	@Override
	public int countByExample(ProductkuidExample example) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int deleteByExample(ProductkuidExample example) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int deleteByPrimaryKey(Integer kuid) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int insert(Productkuid record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int insertSelective(Productkuid record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public List<Productkuid> selectByExample(ProductkuidExample example) {
		return productkuidMapper.selectByExample(example);
	}

	@Override
	public List<ProductkuidView> selectByProduct(Product product) {
		String kuidKey = REDIS_ATTRIBUTE_VALUE+product.getPid();
		String value = jedisDao.get(kuidKey);
		List<ProductkuidView> list = null;
		if(StringUtils.isNotBlank(value)) {
			list = JsonUtils.jsonToList(value, ProductkuidView.class);
		}else {
			list = productkuidMapper.selectByProduct(product);
			String kuidValue = JsonUtils.objectToJson(list);
			jedisDao.set(kuidKey, kuidValue);
		}
		return list;
	}

	@Override
	public Productkuid selectByPrimaryKey(Integer kuid) {
		return productkuidMapper.selectByPrimaryKey(kuid);
	}

	@Override
	public int updateByExampleSelective(Productkuid record, ProductkuidExample example) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int updateByExample(Productkuid record, ProductkuidExample example) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int updateByPrimaryKeySelective(Productkuid record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int updateByPrimaryKey(Productkuid record) {
		// TODO Auto-generated method stub
		return 0;
	}

}
