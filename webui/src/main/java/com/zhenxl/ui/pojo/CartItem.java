package com.zhenxl.ui.pojo;

import java.io.Serializable;

import com.zhenxl.pojo.Product;
import com.zhenxl.pojo.Productkuid;

public class CartItem implements Serializable{
	private Integer id;//产品id
	private Integer num;//购买数量
	private Integer kuid;//kuid
	private String vAttrValue;//型号
	private Productkuid productKuid;//库存信息
	private Product product;//产品信息
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public Integer getNum() {
		return num;
	}
	public void setNum(Integer num) {
		this.num = num;
	}
	public Integer getKuid() {
		return kuid;
	}
	public void setKuid(Integer kuid) {
		this.kuid = kuid;
	}
/*	public Integer getvAttrValue() {
		return vAttrValue;
	}
	public void setvAttrValue(Integer vAttrValue) {
		this.vAttrValue = vAttrValue;
	}*/
	public Productkuid getProductKuid() {
		return productKuid;
	}
	public String getvAttrValue() {
		return vAttrValue;
	}
	public void setvAttrValue(String vAttrValue) {
		this.vAttrValue = vAttrValue;
	}
	public void setProductKuid(Productkuid productKuid) {
		this.productKuid = productKuid;
	}
	public Product getProduct() {
		return product;
	}
	public void setProduct(Product product) {
		this.product = product;
	}
	
	
}
