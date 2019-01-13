package com.zhenxl.ui.service;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.ibatis.annotations.Param;

import com.zhenxl.commonutil.JsonMsg;
import com.zhenxl.pojo.User;
import com.zhenxl.pojo.UserExample;

public interface UserService {
	int countByExample(UserExample example);

    int deleteByExample(UserExample example);

    int deleteByPrimaryKey(Integer uid);

    int insert(User record);

    int insertSelective(User record);

    List<User> selectByExample(UserExample example);

    User selectByPrimaryKey(Integer uid);

    int updateByExampleSelective(@Param("record") User record, @Param("example") UserExample example);

    int updateByExample(@Param("record") User record, @Param("example") UserExample example);

    int updateByPrimaryKeySelective(User record);

    int updateByPrimaryKey(User record);

	JsonMsg logout(String token);

	User getRedisByToken(String token);

	User getCheckUser(String uname, String pwd, HttpServletResponse response, HttpServletRequest request);
}
