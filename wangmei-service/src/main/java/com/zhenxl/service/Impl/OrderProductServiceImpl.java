package com.zhenxl.service.Impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zhenxl.mapper.OrderProductMapper;
import com.zhenxl.pojo.OrderProduct;
import com.zhenxl.pojo.OrderProductExample;
import com.zhenxl.service.OrderProductService;
@Service
public class OrderProductServiceImpl implements OrderProductService{

	@Autowired
	private OrderProductMapper orderProductMapper;
	@Override
	public int countByExample(OrderProductExample example) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int deleteByExample(OrderProductExample example) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int deleteByPrimaryKey(String oid) {
		return orderProductMapper.deleteByPrimaryKey(oid);
	}

	@Override
	public int insert(OrderProduct record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int insertSelective(OrderProduct record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public List<OrderProduct> selectByExample(OrderProductExample example) {
		return orderProductMapper.selectByExample(example);
	}



	@Override
	public int updateByExampleSelective(OrderProduct record, OrderProductExample example) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int updateByExample(OrderProduct record, OrderProductExample example) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int updateByPrimaryKeySelective(OrderProduct record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int updateByPrimaryKey(OrderProduct record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public OrderProduct selectByPrimaryKey(String oid) {
		return orderProductMapper.selectByPrimaryKey(oid);
	}



}
