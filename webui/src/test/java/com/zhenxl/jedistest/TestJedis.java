package com.zhenxl.jedistest;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import com.zhenxl.mapper.ProductkuidMapper;
import com.zhenxl.ui.dao.JedisDao;

import redis.clients.jedis.Jedis;

public class TestJedis {
	@Test
	public void testJeds() {
		Jedis jedis = new Jedis("127.0.0.1", 6379);
		jedis.set("k1", "kkkkk");
		String value = jedis.get("k1");
		System.out.println("value:"+value);
	}
}
