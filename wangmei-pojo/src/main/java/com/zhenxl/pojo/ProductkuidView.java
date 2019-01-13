package com.zhenxl.pojo;

public class ProductkuidView {
	private Integer kuid;

	private Integer pid;

	private Integer storenum;
	private Integer vid;

	private Integer aid;

	private String vname;

	private Integer isdel;

	public Integer getVid() {
		return vid;
	}

	public void setVid(Integer vid) {
		this.vid = vid;
	}

	public Integer getAid() {
		return aid;
	}

	public void setAid(Integer aid) {
		this.aid = aid;
	}

	public String getVname() {
		return vname;
	}

	public void setVname(String vname) {
		this.vname = vname == null ? null : vname.trim();
	}

	public Integer getIsdel() {
		return isdel;
	}

	public void setIsdel(Integer isdel) {
		this.isdel = isdel;
	}

	public Integer getKuid() {
		return kuid;
	}

	public void setKuid(Integer kuid) {
		this.kuid = kuid;
	}

	public Integer getPid() {
		return pid;
	}

	public void setPid(Integer pid) {
		this.pid = pid;
	}

	public Integer getStorenum() {
		return storenum;
	}

	public void setStorenum(Integer storenum) {
		this.storenum = storenum;
	}

}
