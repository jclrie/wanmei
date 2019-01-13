package com.zhenxl.pojo;

import java.util.List;

public class Attribute {
    private Integer aid;

    private Integer cid;

    private String aname;

    private Integer isdel;
    
    private List<Attributevalue> attributevalues;

    public List<Attributevalue> getAttributevalues() {
		return attributevalues;
	}

	public void setAttributevalues(List<Attributevalue> attributevalues) {
		this.attributevalues = attributevalues;
	}

	public Integer getAid() {
        return aid;
    }

    public void setAid(Integer aid) {
        this.aid = aid;
    }

    public Integer getCid() {
        return cid;
    }

    public void setCid(Integer cid) {
        this.cid = cid;
    }

    public String getAname() {
        return aname;
    }

    public void setAname(String aname) {
        this.aname = aname == null ? null : aname.trim();
    }

    public Integer getIsdel() {
        return isdel;
    }

    public void setIsdel(Integer isdel) {
        this.isdel = isdel;
    }
}