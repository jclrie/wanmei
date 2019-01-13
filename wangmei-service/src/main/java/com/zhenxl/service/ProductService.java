package com.zhenxl.service;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Service;

import com.zhenxl.pojo.Product;
import com.zhenxl.pojo.ProductExample;
public interface ProductService {
	 int countByExample(ProductExample example);

	    int deleteByExample(ProductExample example);

	    int deleteByPrimaryKey(Integer pid);

	    int insert(Product record);

	    int insertSelective(Product record);

	    List<Product> selectByExample(ProductExample example);

	    Product selectByPrimaryKey(Integer pid);

	    int updateByExampleSelective(@Param("record") Product record, @Param("example") ProductExample example);

	    int updateByExample(@Param("record") Product record, @Param("example") ProductExample example);

	    int updateByPrimaryKeySelective(Product record);

	    int updateByPrimaryKey(Product record);
	    
	    void deletByPrimaryKeyRedis(Integer pid);
}