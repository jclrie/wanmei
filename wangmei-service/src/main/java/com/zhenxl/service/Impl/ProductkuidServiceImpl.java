package com.zhenxl.service.Impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zhenxl.mapper.ProductkuidMapper;
import com.zhenxl.pojo.Product;
import com.zhenxl.pojo.Productkuid;
import com.zhenxl.pojo.ProductkuidExample;
import com.zhenxl.pojo.ProductkuidView;
import com.zhenxl.service.ProductkuidService;

import redis.clients.jedis.Jedis;
import redis.clients.jedis.JedisPool;
@Service
public class ProductkuidServiceImpl implements ProductkuidService{
	@Autowired
	private JedisPool jedisPool;
	@Autowired
	private ProductkuidMapper productkuidMapper;
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
		return productkuidMapper.insert(record);
	}

	@Override
	public int insertSelective(Productkuid record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public List<Productkuid> selectByExample(ProductkuidExample example) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Productkuid selectByPrimaryKey(Integer kuid) {
		// TODO Auto-generated method stub
		return null;
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

	@Override
	public List<ProductkuidView> selectByProduct(Product product) {
		return productkuidMapper.selectByProduct(product);
	}

	@Override
	public void insertAll(List<Productkuid> list) throws Exception{
		for(Productkuid kuid:list) {
			ProductkuidExample example = new ProductkuidExample();
			example.createCriteria().andPidEqualTo(kuid.getPid()).andVidEqualTo(kuid.getVid());
			List<Productkuid> kuids = productkuidMapper.selectByExample(example);
			if(!kuids.isEmpty()) {
				productkuidMapper.updateByExample(kuid, example);
			}else {
				productkuidMapper.insert(kuid);
			}
		}
	}

	@Override
	public void deletByPrimaryKeyRedis(Integer pid) {
		Jedis jedis = jedisPool.getResource();
		jedis.del("REDIS_ATTRIBUTE_VALUE"+pid);
		jedis.close();
	}

}
