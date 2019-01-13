package com.zhenxl.ui.interceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import com.zhenxl.commonutil.CookieUtil;
import com.zhenxl.pojo.User;
import com.zhenxl.ui.service.UserService;

public class LoginInterceptor implements HandlerInterceptor{
	@Autowired
	private UserService userService;
	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
			throws Exception {
		// 1、到cookie中取token
				String token = CookieUtil.getCookieValue(request, "TOKEN_COOKIE", false);
				if (StringUtils.isBlank(token)) {
					// 1、获取上一次请求路径
					String returnUrl = request.getRequestURL().toString();
					request.getRequestDispatcher("/loginView?returnUrl=" + returnUrl).forward(request, response);
					return false;
				}
				// 2、如果存在token到redis中取登录信息
				// redis取登录信息
				User user = userService.getRedisByToken(token);
				if (user == null) {
					String returnUrl = request.getRequestURL().toString();
					request.getRequestDispatcher("/loginView?returnUrl=" + returnUrl).forward(request, response);
//					response.sendRedirect("/loginView?returnUrl=" + returnUrl);
					return false;
				}
				// 2-1 如果有登录信息，放行
				return true;
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
