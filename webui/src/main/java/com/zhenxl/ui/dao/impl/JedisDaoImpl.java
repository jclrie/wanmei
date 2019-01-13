package com.zhenxl.ui.dao.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.zhenxl.ui.dao.JedisDao;

import redis.clients.jedis.Jedis;
import redis.clients.jedis.JedisPool;
@Repository
public class JedisDaoImpl implements JedisDao {
	//连接池
	@Autowired
	private JedisPool jedisPool;
	@Override
	public String get(String key) {
		// TODO Auto-generated method stub
		//获得Jedis对象
		Jedis jedis= jedisPool.getResource();
		String value=jedis.get(key);
		jedis.close();
		return value;
	}

	@Override
	public String set(String key, String value) {
		// TODO Auto-generated method stub
		Jedis jedis= jedisPool.getResource();
		String string = jedis.set(key, value);
		jedis.close();
		return string;
	}

	@Override
	public String hget(String hkey, String key) {
		// TODO Auto-generated method stub
		Jedis jedis= jedisPool.getResource();
		String str = jedis.hget(hkey, key);
		jedis.close();
		return str;
	}

	@Override
	public long hset(String hkey, String key, String value) {
		// TODO Auto-generated method stub
		Jedis jedis= jedisPool.getResource();
		Long l = jedis.hset(hkey, key, value);
		jedis.close();
		return l;
	}

	@Override
	public long incr(String key) {
		// TODO Auto-generated method stub
		Jedis jedis= jedisPool.getResource();
		Long l = jedis.incr(key);
		jedis.close();
		return l;
	}

	@Override
	public long expire(String key, int second) {
		// TODO Auto-generated method stub
		Jedis jedis= jedisPool.getResource();
		Long l = jedis.expire(key, second);
		jedis.close();
		return l;
	}

	@Override
	public long ttl(String key) {
		// TODO Auto-generated method stub
		Jedis jedis= jedisPool.getResource();
		Long l = jedis.ttl(key);
		jedis.close();
		return l;
	}

	@Override
	public long del(String key) {
		// TODO Auto-generated method stub
		Jedis jedis= jedisPool.getResource();
		Long l = jedis.del(key);
		jedis.close();
		return l;
	}

	@Override
	public long hdel(String hkey, String key) {
		// TODO Auto-generated method stub
		Jedis jedis= jedisPool.getResource();
		Long l = jedis.hdel(hkey, key);
		jedis.close();
		return l;
	}

}
