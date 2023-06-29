package com.example.BetterDayApp.Repository;

import com.example.BetterDayApp.Model.DailyRecord;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface RecordRepository extends MongoRepository<DailyRecord, Integer> {

}
