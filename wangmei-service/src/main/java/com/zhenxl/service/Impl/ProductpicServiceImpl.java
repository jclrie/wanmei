package com.zhenxl.service.Impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zhenxl.mapper.ProductpicMapper;
import com.zhenxl.pojo.Productpic;
import com.zhenxl.pojo.ProductpicExample;
import com.zhenxl.service.ProductpicService;
@Service
public class ProductpicServiceImpl implements ProductpicService {

	@Autowired
	private ProductpicMapper productPicMapper;
	@Override
	public int countByExample(ProductpicExample example) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int deleteByExample(ProductpicExample example) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int deleteByPrimaryKey(Integer picid) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int insert(Productpic record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int insertSelective(Productpic record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public List<Productpic> selectByExample(ProductpicExample example) {
		return productPicMapper.selectByExample(example);
	}

	@Override
	public Productpic selectByPrimaryKey(Integer picid) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int updateByExampleSelective(Productpic record, ProductpicExample example) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int updateByExample(Productpic record, ProductpicExample example) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int updateByPrimaryKeySelective(Productpic record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int updateByPrimaryKey(Productpic record) {
		// TODO Auto-generated method stub
		return 0;
	}

}
