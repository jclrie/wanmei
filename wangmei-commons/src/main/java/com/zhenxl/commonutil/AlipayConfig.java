package com.zhenxl.commonutil;

public class AlipayConfig {
	 //1、appid
    public static String appid="2016092300581247";
    //2、privatekey
    public static String privateKey="MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCmKHPNjg45fsaUeXneHcMhE431GbAfJs2OlyEb6bvWz5/v2rdYlQyRc93gsMQSAuQcQ3CpANIvTf+ZRoz9RwpTlwUUzpZ5v2V4Jy88Zn8UTkQa3Yo5fINbgnlkkDa7kvOfWAErYaTCjX4Xu8RctRz84RBfB+/4Bsg8TJv+q+/tiaov/a6gOi/7I84WO+OAYdUT6RlngAqPPoPcc3itPKjSlc2k3Z43yRU2DzPBPQaNoHZp3ziFCqKd6yfKE1hkhoEQAb2wWRt1NDtAp+v7SrZp3iSr7rhqidcYRoK47RuKNZ3zNmButiVQSw9Usxu7ct6cxnf6tat55FsMfMywCJXXAgMBAAECggEAV52xIs0rlwnQsO41YviSslhbXMlE48hUUEJFBTEFCcrF7XaJg75kuDY+44KSgWTg4D53o8Z5DtS0WSCoq83QFi/mUAh3tI9GdEtFTzZFAHIc24XCo3mS0qhEVtDs65AbwwRm6Xc9qBFwUheC/dfLB1Wuik3nLgR1hcZn46zKgZhd12JoGqyOrhJuDjx2lcdwUD/vs4qZmnSnKJuWXKfup3WwLt4m5CUPfLTsy5Md8P7/yuaLib9Zi2u0cAINkoqujvrbAjx8fU9k4vRRCQASUzd70q7uYGiwlI92l1hvX7JMmY79Wxb82hROfn3Fb6lsK/Pm2nka7ZMSL5/VCPu88QKBgQD98m20ouWh3mtoYvapOhhZqmajF2I+DFiMlvA4hHQnKZKAHAl4SwkX/qJv3kPkt+qMHWtJFAed3enNvOooSsWD+vr4m2N5oYAnS4IEO4sOCFBzQDHIDlBqirGd43H/l0gL2gylulHkjj4nX4Jo/avQU6MCzHVKARLvXRb0+58xlQKBgQCngFW11Fhh4fuV3HB374Lvww2+odKWBrnr+P/BHPVI2LtNJSlEFlpMDWtcg5NhuBoXzF5vPUEKzc3iF05VeeQQX+jA3br8gBl1zDfgczAZT7eCjsG3bbLrh2c1aQ1dOc8A9wupWtujWTD6XiR5zxNujDkr6hW7GgrNs1LnPYZmuwKBgQCdljxn9RJlEZ47h/Yja87CjdDlclRfxs+IZv4pRGDEELM91qg1wvKgtj5dB2PAYjUlv/fcwJY9bAFzz8DLQiMx1KS7c8oWJ5dcSyoisESJb7Vk37hEukVC6FBydzs97cYivKxOh8HcAD0nt8g4mPpu7Afja7d5NhNnALCHVEIkxQKBgEtm7C6EPp0hm52ktERpX2oLRl6wfhnnQT7GwmruXETEu9xIhEEQRunBiLkGygvNUoGwEDrHOkZgyvOiRjMYQeBVLHPV3NzZ1Zw/qE+zys06I4P0O6QVD9wTAhT7C3cSFOt8SpWcPw9TkUbDpmvnGfpDyWDJaarmWEKtHP7XpW8NAoGAdHmuchwFSrDM6TcShtTwg270A4Z0O1++h1xE2ujSKK2zeSeaIz0j98o9gD6aEM1EA+WoQnmlMBfKyPQwHZKJDVNbXLKHYldA7qyUDrFybm6hV+pzOt0cleZwTtKIzFJQ4etLz4KUjSM5Ncw4FOmVnIODCQOn16Ok9wdRvfmJUio=";
    //3、publicKey
    public static String publicKey="MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEApihzzY4OOX7GlHl53h3DIRON9RmwHybNjpchG+m71s+f79q3WJUMkXPd4LDEEgLkHENwqQDSL03/mUaM/UcKU5cFFM6Web9leCcvPGZ/FE5EGt2KOXyDW4J5ZJA2u5Lzn1gBK2Gkwo1+F7vEXLUc/OEQXwfv+AbIPEyb/qvv7YmqL/2uoDov+yPOFjvjgGHVE+kZZ4AKjz6D3HN4rTyo0pXNpN2eN8kVNg8zwT0GjaB2ad84hQqinesnyhNYZIaBEAG9sFkbdTQ7QKfr+0q2ad4kq+64aonXGEaCuO0bijWd8zZgbrYlUEsPVLMbu3LenMZ3+rWreeRbDHzMsAiV1wIDAQAB";
    //4、页面跳转同步url
    public static String return_Url="http://localhost:6060/success";
    //5、处理url
    public static String notify_url="http://localhost:6060/notify";
    //6、编码格式
    public static String encoder="UTF-8";
    //7、签名方式
    public static String sign_type="RSA2";

    //字符串处理格式
    public static String paramType="JSON";
    //8、支付网关
    public static String URL="https://openapi.alipaydev.com/gateway.do";
    //9、日志记录
    public static String log_path="/log";
    //9、成功返回页面
    //10、失败返回页面
}
