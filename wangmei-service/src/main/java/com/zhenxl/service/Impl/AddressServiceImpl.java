package com.zhenxl.service.Impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zhenxl.mapper.AddressMapper;
import com.zhenxl.pojo.Address;
import com.zhenxl.pojo.AddressExample;
import com.zhenxl.service.AddressService;
@Service
public class AddressServiceImpl implements AddressService {

	@Autowired
	private AddressMapper addressMapper;
	@Override
	public int countByExample(AddressExample example) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int deleteByExample(AddressExample example) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int deleteByPrimaryKey(Integer addressid) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int insert(Address record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int insertSelective(Address record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public List<Address> selectByExample(AddressExample example) {
		// TODO Auto-generated method stub
		return addressMapper.selectByExample(example);
	}

	@Override
	public Address selectByPrimaryKey(Integer addressid) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int updateByExampleSelective(Address record, AddressExample example) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int updateByExample(Address record, AddressExample example) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int updateByPrimaryKeySelective(Address record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int updateByPrimaryKey(Address record) {
		// TODO Auto-generated method stub
		return 0;
	}

}
