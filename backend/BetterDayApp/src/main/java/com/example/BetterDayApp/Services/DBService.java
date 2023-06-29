package com.example.BetterDayApp.Services;

import com.example.BetterDayApp.Model.DailyRecord;
import com.example.BetterDayApp.Repository.RecordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class DBService {

    @Autowired
    private RecordRepository repo;

    public String addRecord(String dayNum, String calOfDay){

        DailyRecord dr = new DailyRecord();
        dr.setDayNum(Integer.parseInt(dayNum));
        dr.setCalOfDay(Integer.parseInt(calOfDay));

        repo.save(dr);

        System.out.println("Successfully inserted a record to DB: "+dr.getId());
        return "Successfully inserted a record to DB";
    }

    public List<DailyRecord> getRecords(){
        return repo.findAll();
    }

}
