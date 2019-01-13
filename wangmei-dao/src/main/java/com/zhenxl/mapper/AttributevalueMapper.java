package com.zhenxl.mapper;

import com.zhenxl.pojo.Attributevalue;
import com.zhenxl.pojo.AttributevalueExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface AttributevalueMapper {
    int countByExample(AttributevalueExample example);

    int deleteByExample(AttributevalueExample example);

    int deleteByPrimaryKey(Integer vid);

    int insert(Attributevalue record);

    int insertSelective(Attributevalue record);

    List<Attributevalue> selectByExample(AttributevalueExample example);

    Attributevalue selectByPrimaryKey(Integer vid);

    int updateByExampleSelective(@Param("record") Attributevalue record, @Param("example") AttributevalueExample example);

    int updateByExample(@Param("record") Attributevalue record, @Param("example") AttributevalueExample example);

    int updateByPrimaryKeySelective(Attributevalue record);

    int updateByPrimaryKey(Attributevalue record);
}