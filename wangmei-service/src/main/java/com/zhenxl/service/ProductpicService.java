package com.zhenxl.service;

import com.zhenxl.pojo.Productpic;
import com.zhenxl.pojo.ProductpicExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface ProductpicService {
    int countByExample(ProductpicExample example);

    int deleteByExample(ProductpicExample example);

    int deleteByPrimaryKey(Integer picid);

    int insert(Productpic record);

    int insertSelective(Productpic record);

    List<Productpic> selectByExample(ProductpicExample example);

    Productpic selectByPrimaryKey(Integer picid);

    int updateByExampleSelective(@Param("record") Productpic record, @Param("example") ProductpicExample example);

    int updateByExample(@Param("record") Productpic record, @Param("example") ProductpicExample example);

    int updateByPrimaryKeySelective(Productpic record);

    int updateByPrimaryKey(Productpic record);
}