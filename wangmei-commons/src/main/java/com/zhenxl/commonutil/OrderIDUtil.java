package com.zhenxl.commonutil;

import org.apache.commons.lang3.RandomUtils;
import org.apache.commons.lang3.StringUtils;

public class OrderIDUtil {
	public static String orderKeyGenerator() {
		String key = System.currentTimeMillis()+RandomUtils.nextInt(100, 999)+"";
		return key;
	}
}
