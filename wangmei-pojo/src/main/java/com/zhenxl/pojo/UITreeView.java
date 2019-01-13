package com.zhenxl.pojo;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class UITreeView implements Serializable{
	private static final long serialVersionUID = -6425517669328130775L;
	//分类id
	private Integer cid;
	//text nodes节点显示的文本信息
	private String text;
	//nodes 当前节点的子节点
	private List<UITreeView> nodes = new ArrayList<>(0);
	
	private int parentid;

	public Integer getCid() {
		return cid;
	}

	public void setCid(Integer cid) {
		this.cid = cid;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public List<UITreeView> getNodes() {
		return nodes;
	}

	public void setNodes(List<UITreeView> nodes) {
		this.nodes = nodes;
	}

	public int getParentid() {
		return parentid;
	}

	public void setParentid(int parentid) {
		this.parentid = parentid;
	}
	
}
