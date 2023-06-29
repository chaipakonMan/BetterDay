package com.example.BetterDayApp.Model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class DailyRecord {

    @Id
    private String id;

    private int dayNum;
    private int calOfDay;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public int getDayNum() {
        return dayNum;
    }

    public void setDayNum(int dayNum) {
        this.dayNum = dayNum;
    }

    public int getCalOfDay() {
        return calOfDay;
    }

    public void setCalOfDay(int calOfDay) {
        this.calOfDay = calOfDay;
    }
}