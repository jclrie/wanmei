package com.zhenxl.service;

import com.zhenxl.pojo.Attribute;
import com.zhenxl.pojo.AttributeExample;
import com.zhenxl.pojo.UITreeView;

import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface AttributeService {
    int countByExample(AttributeExample example);

    int deleteByExample(AttributeExample example);

    int deleteByPrimaryKey(Integer aid);

    int insert(Attribute record);

    int insertSelective(Attribute record);

    List<Attribute> selectByExample(AttributeExample example);

    Attribute selectByPrimaryKey(Integer aid);

    int updateByExampleSelective(@Param("record") Attribute record, @Param("example") AttributeExample example);

    int updateByExample(@Param("record") Attribute record, @Param("example") AttributeExample example);

    int updateByPrimaryKeySelective(Attribute record);

    int updateByPrimaryKey(Attribute record);
  
}