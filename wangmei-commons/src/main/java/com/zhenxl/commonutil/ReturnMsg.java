package com.zhenxl.commonutil;

import java.io.Serializable;

public class ReturnMsg implements Serializable{
	private static final long serialVersionUID = 698171350232322281L;
	private int error;//0,1
	private String url;
	private String message;
	public int getError() {
		return error;
	}
	public void setError(int error) {
		this.error = error;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	
}
