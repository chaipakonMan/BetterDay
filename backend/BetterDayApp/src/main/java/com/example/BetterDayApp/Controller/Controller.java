package com.example.BetterDayApp.Controller;

import com.example.BetterDayApp.Model.DailyRecord;
import com.example.BetterDayApp.Services.DBService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/bd")
@CrossOrigin
public class Controller {

    @Autowired
    private DBService dbService;

    @PostMapping("/addRecord")
    public String addRecord(@RequestHeader("dayNum") String dayNum, @RequestHeader("calOfDay") String calOfDay){
        return dbService.addRecord(dayNum, calOfDay);
    }

    @GetMapping("/getRecords")
    public List<DailyRecord> getRecords(){
        return dbService.getRecords();
    }

}
