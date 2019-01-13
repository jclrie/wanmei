package com.zhenxl.service.Impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zhenxl.mapper.AttributeMapper;
import com.zhenxl.pojo.Attribute;
import com.zhenxl.pojo.AttributeExample;
import com.zhenxl.pojo.Categery;
import com.zhenxl.pojo.UITreeView;
import com.zhenxl.service.AttributeService;
@Service
public class AttributeServiceImpl implements AttributeService{
	@Autowired
	private AttributeMapper attributeMapper;
	@Override
	public int countByExample(AttributeExample example) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int deleteByExample(AttributeExample example) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int deleteByPrimaryKey(Integer aid) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int insert(Attribute record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int insertSelective(Attribute record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public List<Attribute> selectByExample(AttributeExample example) {
		return attributeMapper.selectByExample(example);
	}

	@Override
	public Attribute selectByPrimaryKey(Integer aid) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int updateByExampleSelective(Attribute record, AttributeExample example) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int updateByExample(Attribute record, AttributeExample example) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int updateByPrimaryKeySelective(Attribute record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int updateByPrimaryKey(Attribute record) {
		// TODO Auto-generated method stub
		return 0;
	}


}
