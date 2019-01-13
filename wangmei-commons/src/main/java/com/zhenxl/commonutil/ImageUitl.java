package com.zhenxl.commonutil;

import org.apache.commons.lang3.RandomStringUtils;
import org.apache.commons.lang3.RandomUtils;
import org.apache.commons.lang3.StringUtils;

public class ImageUitl {
	//創建新文件名
	public static String newFileName(String oldName) {
		//創建文件名規則：系統時間+隨機三位數據+"."+擴展名
		//TODO
		String newFileName = System.currentTimeMillis()+RandomUtils.nextInt(100,999)+
				"."+StringUtils.substringAfterLast(oldName, ".");
		return newFileName;
	}
}
