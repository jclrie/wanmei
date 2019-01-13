package com.zhenxl.interceptor;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.config.YamlProcessor.ResolutionMethod;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import com.zhenxl.pojo.User;

import redis.clients.jedis.Jedis;
import redis.clients.jedis.JedisPool;

public class LoginInterceptor implements HandlerInterceptor {
	@Autowired
	private JedisPool jedisPool;
	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
			throws Exception {
		Cookie[] cookies = request.getCookies();
		Jedis jedis = jedisPool.getResource();
		for(Cookie c:cookies) {
			if(c.getName().equals("TOKEN_COOKIE_ADMIN")) {
				if(!StringUtils.isBlank(jedis.get("REDIS_LOGIN_KEY_ADMIN_"+c.getValue()))) {
					jedis.close();
					return true;
				}
				
			}
		}
		jedis.close();
		request.getRequestDispatcher("/loginView").forward(request, response);
		return false;
	}

	@Override
	public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler,
			ModelAndView modelAndView) throws Exception {
	}

	@Override
	public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex)
			throws Exception {

	}

}
