package com.zhenxl.pojo;

import java.util.ArrayList;
import java.util.List;

public class ProductkuidExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public ProductkuidExample() {
        oredCriteria = new ArrayList<Criteria>();
    }

    public void setOrderByClause(String orderByClause) {
        this.orderByClause = orderByClause;
    }

    public String getOrderByClause() {
        return orderByClause;
    }

    public void setDistinct(boolean distinct) {
        this.distinct = distinct;
    }

    public boolean isDistinct() {
        return distinct;
    }

    public List<Criteria> getOredCriteria() {
        return oredCriteria;
    }

    public void or(Criteria criteria) {
        oredCriteria.add(criteria);
    }

    public Criteria or() {
        Criteria criteria = createCriteriaInternal();
        oredCriteria.add(criteria);
        return criteria;
    }

    public Criteria createCriteria() {
        Criteria criteria = createCriteriaInternal();
        if (oredCriteria.size() == 0) {
            oredCriteria.add(criteria);
        }
        return criteria;
    }

    protected Criteria createCriteriaInternal() {
        Criteria criteria = new Criteria();
        return criteria;
    }

    public void clear() {
        oredCriteria.clear();
        orderByClause = null;
        distinct = false;
    }

    protected abstract static class GeneratedCriteria {
        protected List<Criterion> criteria;

        protected GeneratedCriteria() {
            super();
            criteria = new ArrayList<Criterion>();
        }

        public boolean isValid() {
            return criteria.size() > 0;
        }

        public List<Criterion> getAllCriteria() {
            return criteria;
        }

        public List<Criterion> getCriteria() {
            return criteria;
        }

        protected void addCriterion(String condition) {
            if (condition == null) {
                throw new RuntimeException("Value for condition cannot be null");
            }
            criteria.add(new Criterion(condition));
        }

        protected void addCriterion(String condition, Object value, String property) {
            if (value == null) {
                throw new RuntimeException("Value for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value));
        }

        protected void addCriterion(String condition, Object value1, Object value2, String property) {
            if (value1 == null || value2 == null) {
                throw new RuntimeException("Between values for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value1, value2));
        }

        public Criteria andKuidIsNull() {
            addCriterion("KUID is null");
            return (Criteria) this;
        }

        public Criteria andKuidIsNotNull() {
            addCriterion("KUID is not null");
            return (Criteria) this;
        }

        public Criteria andKuidEqualTo(Integer value) {
            addCriterion("KUID =", value, "kuid");
            return (Criteria) this;
        }

        public Criteria andKuidNotEqualTo(Integer value) {
            addCriterion("KUID <>", value, "kuid");
            return (Criteria) this;
        }

        public Criteria andKuidGreaterThan(Integer value) {
            addCriterion("KUID >", value, "kuid");
            return (Criteria) this;
        }

        public Criteria andKuidGreaterThanOrEqualTo(Integer value) {
            addCriterion("KUID >=", value, "kuid");
            return (Criteria) this;
        }

        public Criteria andKuidLessThan(Integer value) {
            addCriterion("KUID <", value, "kuid");
            return (Criteria) this;
        }

        public Criteria andKuidLessThanOrEqualTo(Integer value) {
            addCriterion("KUID <=", value, "kuid");
            return (Criteria) this;
        }

        public Criteria andKuidIn(List<Integer> values) {
            addCriterion("KUID in", values, "kuid");
            return (Criteria) this;
        }

        public Criteria andKuidNotIn(List<Integer> values) {
            addCriterion("KUID not in", values, "kuid");
            return (Criteria) this;
        }

        public Criteria andKuidBetween(Integer value1, Integer value2) {
            addCriterion("KUID between", value1, value2, "kuid");
            return (Criteria) this;
        }

        public Criteria andKuidNotBetween(Integer value1, Integer value2) {
            addCriterion("KUID not between", value1, value2, "kuid");
            return (Criteria) this;
        }

        public Criteria andPidIsNull() {
            addCriterion("PID is null");
            return (Criteria) this;
        }

        public Criteria andPidIsNotNull() {
            addCriterion("PID is not null");
            return (Criteria) this;
        }

        public Criteria andPidEqualTo(Integer value) {
            addCriterion("PID =", value, "pid");
            return (Criteria) this;
        }

        public Criteria andPidNotEqualTo(Integer value) {
            addCriterion("PID <>", value, "pid");
            return (Criteria) this;
        }

        public Criteria andPidGreaterThan(Integer value) {
            addCriterion("PID >", value, "pid");
            return (Criteria) this;
        }

        public Criteria andPidGreaterThanOrEqualTo(Integer value) {
            addCriterion("PID >=", value, "pid");
            return (Criteria) this;
        }

        public Criteria andPidLessThan(Integer value) {
            addCriterion("PID <", value, "pid");
            return (Criteria) this;
        }

        public Criteria andPidLessThanOrEqualTo(Integer value) {
            addCriterion("PID <=", value, "pid");
            return (Criteria) this;
        }

        public Criteria andPidIn(List<Integer> values) {
            addCriterion("PID in", values, "pid");
            return (Criteria) this;
        }

        public Criteria andPidNotIn(List<Integer> values) {
            addCriterion("PID not in", values, "pid");
            return (Criteria) this;
        }

        public Criteria andPidBetween(Integer value1, Integer value2) {
            addCriterion("PID between", value1, value2, "pid");
            return (Criteria) this;
        }

        public Criteria andPidNotBetween(Integer value1, Integer value2) {
            addCriterion("PID not between", value1, value2, "pid");
            return (Criteria) this;
        }

        public Criteria andVidIsNull() {
            addCriterion("vid is null");
            return (Criteria) this;
        }

        public Criteria andVidIsNotNull() {
            addCriterion("vid is not null");
            return (Criteria) this;
        }

        public Criteria andVidEqualTo(Integer value) {
            addCriterion("vid =", value, "vid");
            return (Criteria) this;
        }

        public Criteria andVidNotEqualTo(Integer value) {
            addCriterion("vid <>", value, "vid");
            return (Criteria) this;
        }

        public Criteria andVidGreaterThan(Integer value) {
            addCriterion("vid >", value, "vid");
            return (Criteria) this;
        }

        public Criteria andVidGreaterThanOrEqualTo(Integer value) {
            addCriterion("vid >=", value, "vid");
            return (Criteria) this;
        }

        public Criteria andVidLessThan(Integer value) {
            addCriterion("vid <", value, "vid");
            return (Criteria) this;
        }

        public Criteria andVidLessThanOrEqualTo(Integer value) {
            addCriterion("vid <=", value, "vid");
            return (Criteria) this;
        }

        public Criteria andVidIn(List<Integer> values) {
            addCriterion("vid in", values, "vid");
            return (Criteria) this;
        }

        public Criteria andVidNotIn(List<Integer> values) {
            addCriterion("vid not in", values, "vid");
            return (Criteria) this;
        }

        public Criteria andVidBetween(Integer value1, Integer value2) {
            addCriterion("vid between", value1, value2, "vid");
            return (Criteria) this;
        }

        public Criteria andVidNotBetween(Integer value1, Integer value2) {
            addCriterion("vid not between", value1, value2, "vid");
            return (Criteria) this;
        }

        public Criteria andStorenumIsNull() {
            addCriterion("storenum is null");
            return (Criteria) this;
        }

        public Criteria andStorenumIsNotNull() {
            addCriterion("storenum is not null");
            return (Criteria) this;
        }

        public Criteria andStorenumEqualTo(Integer value) {
            addCriterion("storenum =", value, "storenum");
            return (Criteria) this;
        }

        public Criteria andStorenumNotEqualTo(Integer value) {
            addCriterion("storenum <>", value, "storenum");
            return (Criteria) this;
        }

        public Criteria andStorenumGreaterThan(Integer value) {
            addCriterion("storenum >", value, "storenum");
            return (Criteria) this;
        }

        public Criteria andStorenumGreaterThanOrEqualTo(Integer value) {
            addCriterion("storenum >=", value, "storenum");
            return (Criteria) this;
        }

        public Criteria andStorenumLessThan(Integer value) {
            addCriterion("storenum <", value, "storenum");
            return (Criteria) this;
        }

        public Criteria andStorenumLessThanOrEqualTo(Integer value) {
            addCriterion("storenum <=", value, "storenum");
            return (Criteria) this;
        }

        public Criteria andStorenumIn(List<Integer> values) {
            addCriterion("storenum in", values, "storenum");
            return (Criteria) this;
        }

        public Criteria andStorenumNotIn(List<Integer> values) {
            addCriterion("storenum not in", values, "storenum");
            return (Criteria) this;
        }

        public Criteria andStorenumBetween(Integer value1, Integer value2) {
            addCriterion("storenum between", value1, value2, "storenum");
            return (Criteria) this;
        }

        public Criteria andStorenumNotBetween(Integer value1, Integer value2) {
            addCriterion("storenum not between", value1, value2, "storenum");
            return (Criteria) this;
        }
    }

    public static class Criteria extends GeneratedCriteria {

        protected Criteria() {
            super();
        }
    }

    public static class Criterion {
        private String condition;

        private Object value;

        private Object secondValue;

        private boolean noValue;

        private boolean singleValue;

        private boolean betweenValue;

        private boolean listValue;

        private String typeHandler;

        public String getCondition() {
            return condition;
        }

        public Object getValue() {
            return value;
        }

        public Object getSecondValue() {
            return secondValue;
        }

        public boolean isNoValue() {
            return noValue;
        }

        public boolean isSingleValue() {
            return singleValue;
        }

        public boolean isBetweenValue() {
            return betweenValue;
        }

        public boolean isListValue() {
            return listValue;
        }

        public String getTypeHandler() {
            return typeHandler;
        }

        protected Criterion(String condition) {
            super();
            this.condition = condition;
            this.typeHandler = null;
            this.noValue = true;
        }

        protected Criterion(String condition, Object value, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.typeHandler = typeHandler;
            if (value instanceof List<?>) {
                this.listValue = true;
            } else {
                this.singleValue = true;
            }
        }

        protected Criterion(String condition, Object value) {
            this(condition, value, null);
        }

        protected Criterion(String condition, Object value, Object secondValue, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.secondValue = secondValue;
            this.typeHandler = typeHandler;
            this.betweenValue = true;
        }

        protected Criterion(String condition, Object value, Object secondValue) {
            this(condition, value, secondValue, null);
        }
    }
}