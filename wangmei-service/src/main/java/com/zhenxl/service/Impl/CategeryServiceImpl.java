package com.zhenxl.service.Impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.support.ResourceTransactionManager;

import com.zhenxl.mapper.CategeryMapper;
import com.zhenxl.pojo.Categery;
import com.zhenxl.pojo.CategeryExample;
import com.zhenxl.pojo.UITreeView;
import com.zhenxl.service.CategeryService;
@Service
public class CategeryServiceImpl implements CategeryService {
	
	@Autowired
	private CategeryMapper categeryMapper;
	@Override
	public int countByExample(CategeryExample example) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int deleteByExample(CategeryExample example) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int deleteByPrimaryKey(Integer cid) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int insert(Categery record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int insertSelective(Categery record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public List<Categery> selectByExample(CategeryExample example) {
		return categeryMapper.selectByExample(example);
	}

	@Override
	public Categery selectByPrimaryKey(Integer cid) {
		return categeryMapper.selectByPrimaryKey(cid);
	}

	@Override
	public int updateByExampleSelective(Categery record, CategeryExample example) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int updateByExample(Categery record, CategeryExample example) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int updateByPrimaryKeySelective(Categery record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int updateByPrimaryKey(Categery record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public List<Categery> selectByParentID(Integer parentid) {
		return categeryMapper.selectByParentID(parentid);
	}
	//提供返回TreeView节点对象集合
	public List<UITreeView> getUITreeView(){
		return getParentTreeView();
	}
	/**
	 * 获取父节点
	 */
	public List<UITreeView> getParentTreeView(){
		//parentid=0，代表父节点
		List<Categery> list = selectByParentID(0);
		List<UITreeView> treeNodeList = new ArrayList<>();
		for(Categery cate:list) {
			UITreeView treeNode = new UITreeView();
			treeNode.setCid(cate.getCid());
			treeNode.setParentid(cate.getParentid());
			treeNode.setText(cate.getCname());
//			getChildTreeView(cate.getParentid(), treeNode);
			getChildTreeView(cate.getCid(), treeNode);
			treeNodeList.add(treeNode);
		}
		return treeNodeList;
	}
	/**
	 * 获取子节点
	 */
	public void getChildTreeView(Integer parentId,UITreeView treeNode){
		//获取数据 parentid
		List<Categery> list = selectByParentID(parentId);
		List<UITreeView> treeNodeList = new ArrayList<>();
		for(Categery cate:list) {
			UITreeView treeNode1 = new UITreeView();
			treeNode1.setCid(cate.getCid());
			treeNode1.setParentid(cate.getParentid());
			treeNode1.setText(cate.getCname());
			treeNode.getNodes().add(treeNode1);
		}
		
	}

}
