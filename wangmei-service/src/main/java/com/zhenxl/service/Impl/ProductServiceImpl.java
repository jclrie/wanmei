package com.zhenxl.service.Impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.zhenxl.mapper.ProductMapper;
import com.zhenxl.pojo.Product;
import com.zhenxl.pojo.ProductExample;
import com.zhenxl.service.ProductService;

import redis.clients.jedis.Jedis;
import redis.clients.jedis.JedisPool;

@Service
//@Transactional
public class ProductServiceImpl implements ProductService{
	@Autowired
	private JedisPool jedisPool;
	@Autowired
	private ProductMapper productMapper; 
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
		return productMapper.deleteByPrimaryKey(pid);
	}

	@Override
	public int insert(Product record) {
		return productMapper.insert(record);
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
		return productMapper.selectByPrimaryKey(pid);
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
		return 0;
	}

	@Override
	public int updateByPrimaryKey(Product record) {
		return productMapper.updateByPrimaryKey(record);
	}

	@Override
	public void deletByPrimaryKeyRedis(Integer pid) {
		Jedis jedis = jedisPool.getResource();
		jedis.del("REDIS_PRODUCT"+pid);
		jedis.close();
	}
	

}
