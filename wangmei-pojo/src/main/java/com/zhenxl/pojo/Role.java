package com.zhenxl.pojo;

import java.util.Date;

public class Role {
    private Integer rid;

    private String rolename;

    private String adduser;

    private Date addtime;

    private String modifyuser;

    private Date modiifytime;

    public Integer getRid() {
        return rid;
    }

    public void setRid(Integer rid) {
        this.rid = rid;
    }

    public String getRolename() {
        return rolename;
    }

    public void setRolename(String rolename) {
        this.rolename = rolename == null ? null : rolename.trim();
    }

    public String getAdduser() {
        return adduser;
    }

    public void setAdduser(String adduser) {
        this.adduser = adduser == null ? null : adduser.trim();
    }

    public Date getAddtime() {
        return addtime;
    }

    public void setAddtime(Date addtime) {
        this.addtime = addtime;
    }

    public String getModifyuser() {
        return modifyuser;
    }

    public void setModifyuser(String modifyuser) {
        this.modifyuser = modifyuser == null ? null : modifyuser.trim();
    }

    public Date getModiifytime() {
        return modiifytime;
    }

    public void setModiifytime(Date modiifytime) {
        this.modiifytime = modiifytime;
    }
}