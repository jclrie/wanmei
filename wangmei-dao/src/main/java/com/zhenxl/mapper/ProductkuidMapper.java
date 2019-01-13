package com.zhenxl.mapper;

import com.zhenxl.pojo.Product;
import com.zhenxl.pojo.Productkuid;
import com.zhenxl.pojo.ProductkuidExample;
import com.zhenxl.pojo.ProductkuidView;

import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface ProductkuidMapper {
    int countByExample(ProductkuidExample example);

    int deleteByExample(ProductkuidExample example);

    int deleteByPrimaryKey(Integer kuid);

    int insert(Productkuid record);

    int insertSelective(Productkuid record);

    List<Productkuid> selectByExample(ProductkuidExample example);
    
    List<ProductkuidView> selectByProduct(Product product);

    Productkuid selectByPrimaryKey(Integer kuid);

    int updateByExampleSelective(@Param("record") Productkuid record, @Param("example") ProductkuidExample example);

    int updateByExample(@Param("record") Productkuid record, @Param("example") ProductkuidExample example);

    int updateByPrimaryKeySelective(Productkuid record);

    int updateByPrimaryKey(Productkuid record);
}