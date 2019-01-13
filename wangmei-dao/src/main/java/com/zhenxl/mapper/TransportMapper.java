package com.zhenxl.mapper;

import com.zhenxl.pojo.Transport;
import com.zhenxl.pojo.TransportExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface TransportMapper {
    int countByExample(TransportExample example);

    int deleteByExample(TransportExample example);

    int deleteByPrimaryKey(Integer tid);

    int insert(Transport record);

    int insertSelective(Transport record);

    List<Transport> selectByExample(TransportExample example);

    Transport selectByPrimaryKey(Integer tid);

    int updateByExampleSelective(@Param("record") Transport record, @Param("example") TransportExample example);

    int updateByExample(@Param("record") Transport record, @Param("example") TransportExample example);

    int updateByPrimaryKeySelective(Transport record);

    int updateByPrimaryKey(Transport record);
}