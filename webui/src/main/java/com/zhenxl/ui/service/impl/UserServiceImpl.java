package com.zhenxl.ui.service.impl;

import java.util.List;
import java.util.UUID;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.zhenxl.commonutil.JsonMsg;
import com.zhenxl.commonutil.JsonUtils;
import com.zhenxl.mapper.UserMapper;
import com.zhenxl.pojo.User;
import com.zhenxl.pojo.UserExample;
import com.zhenxl.ui.dao.JedisDao;
import com.zhenxl.ui.service.UserService;
@Service
public class UserServiceImpl implements UserService {
	@Autowired
	private UserMapper userMapper;
	@Autowired
	private JedisDao jedisDao;

	@Value("${REDIS_LOGIN_KEY}")
	private String REDIS_LOGIN_KEY;
	
	private static final String TOKEN_COOKIE="TOKEN_COOKIE"; 

	@Override
	public User getCheckUser(String uname, String pwd,HttpServletResponse response,HttpServletRequest request) {
		// TODO Auto-generated method stub
		//1、数据表中查询--根据输入用户名和密码
		//   (tel='xx' and pwd='123') or (emai='xxx' and pwd='123')
		UserExample example = new UserExample();

		UserExample.Criteria c = example.createCriteria();
		c.andPasswordEqualTo(pwd).andTelEqualTo(uname);

		UserExample.Criteria c1 = example.createCriteria();
		c1.andPasswordEqualTo(pwd).andEmailEqualTo(uname);
		
		example.or(c1);
		
		 List<User> users = userMapper.selectByExample(example);
		 User user = null;		
		//2、如果存在user对象，生成token
		if(!users.isEmpty()) {
			user = users.get(0);
			String token = UUID.randomUUID().toString();
			//将用户信息保存在redis中，相当于在服务器端创建的session对象
			String jedisKey = REDIS_LOGIN_KEY+"_"+token;
			String jsonValue=JsonUtils.objectToJson(user);
			jedisDao.set(jedisKey, jsonValue);
			jedisDao.expire(jedisKey, 1800);//设置过期时间
			
			//将token放到cookie中
			Cookie cookie = new Cookie(TOKEN_COOKIE,token);
			cookie.setPath("/");
			request.setAttribute("token", token);
			response.addCookie(cookie);
		}
		
		return user;
	}

	
	//通过token到redis中获取用户存储信息
	@Override
	public User getRedisByToken(String token) {
		//通过传递过来的token，到redis中查询是否存在用户信息
		String keyRedis= REDIS_LOGIN_KEY+"_"+token;
		String value = jedisDao.get(keyRedis);
		User user = null;
		if(StringUtils.isBlank(value)) {
			return user;
		}
		//redis过期时间重置
		jedisDao.expire(keyRedis, 1800);
		user=JsonUtils.jsonToPojo(value, User.class);		
		return user;
	}
	
	//删除redis
	@Override
	public JsonMsg logout(String token) {
		JsonMsg msg=new JsonMsg();
		//到redis删除redis值
		if(StringUtils.isBlank(token)) {
			msg.setCode(500);
			msg.setMsg("注销失败");
			return msg;
		}
		String keyRedis= REDIS_LOGIN_KEY+"_"+token;
		jedisDao.del(keyRedis);
		msg.setCode(200);
		msg.setMsg("删除成功");
		return msg;
	}
	@Override
	public int countByExample(UserExample example) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int deleteByExample(UserExample example) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int deleteByPrimaryKey(Integer uid) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int insert(User record) {
		return userMapper.insert(record);
	}

	@Override
	public int insertSelective(User record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public List<User> selectByExample(UserExample example) {
		return userMapper.selectByExample(example);
	}

	@Override
	public User selectByPrimaryKey(Integer uid) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int updateByExampleSelective(User record, UserExample example) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int updateByExample(User record, UserExample example) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int updateByPrimaryKeySelective(User record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int updateByPrimaryKey(User record) {
		// TODO Auto-generated method stub
		return 0;
	}


}
