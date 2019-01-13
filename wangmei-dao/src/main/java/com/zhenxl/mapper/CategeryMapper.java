package com.zhenxl.mapper;

import com.zhenxl.pojo.Categery;
import com.zhenxl.pojo.CategeryExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface CategeryMapper {
    int countByExample(CategeryExample example);

    int deleteByExample(CategeryExample example);

    int deleteByPrimaryKey(Integer cid);

    int insert(Categery record);

    int insertSelective(Categery record);

    List<Categery> selectByExample(CategeryExample example);

    Categery selectByPrimaryKey(Integer cid);

    int updateByExampleSelective(@Param("record") Categery record, @Param("example") CategeryExample example);

    int updateByExample(@Param("record") Categery record, @Param("example") CategeryExample example);

    int updateByPrimaryKeySelective(Categery record);

    int updateByPrimaryKey(Categery record);
    
    List<Categery> selectByParentID(Integer parentid);
}