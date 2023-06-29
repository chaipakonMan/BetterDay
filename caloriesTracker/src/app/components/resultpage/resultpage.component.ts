import { Component, OnInit } from '@angular/core';
import { DataAccessingService } from 'src/app/services/DataAccessingService';
import { Record } from 'src/app/Models/Record';

@Component({
  selector: 'app-resultpage',
  templateUrl: './resultpage.component.html',
  styleUrls: ['./resultpage.component.css']
})
export class ResultpageComponent implements OnInit {
  records:Record[];

  constructor(private dataAccessingService:DataAccessingService) { }

  ngOnInit(): void {
    this.getRecords();
  }

  getRecords() {
    this.dataAccessingService.getRecords().toPromise()
    .then(
        data => {
            this.records = data;
            console.log(this.records);
        }
    );;
  }


}
