package com.zhenxl.jedistest;

import org.junit.Test;

import redis.clients.jedis.Jedis;
import redis.clients.jedis.JedisPool;
import redis.clients.jedis.JedisPoolConfig;

public class TestJedisPool {
	@Test
	public void TestJedisPool() {
		//连接池配置
		JedisPoolConfig config = new JedisPoolConfig();
		config.setMaxIdle(100);
		config.setMinIdle(10);
		//创建连接池
		JedisPool pool=new JedisPool(config, "127.0.0.1", 6379);
		//通过连接池拿到jedis
		Jedis jedis = pool.getResource();
	    //通过jiedis操作 redis
		String value = jedis.get("age");
		System.out.println("value:"+value);
		jedis.close();
		
	}
	
}
