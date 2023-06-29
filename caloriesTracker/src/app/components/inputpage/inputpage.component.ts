import { Component, OnInit } from '@angular/core';
import { DataAccessingService } from 'src/app/services/DataAccessingService';

@Component({
  selector: 'app-inputpage',
  templateUrl: './inputpage.component.html',
  styleUrls: ['./inputpage.component.css']
})
export class InputpageComponent implements OnInit {

  dayNum:number = 0;
  calOfDay:number = 0;

  constructor(private dataAccessingService:DataAccessingService) { }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.dayNum+":"+this.calOfDay);
    this.dataAccessingService.addRecord(this.dayNum, this.calOfDay);
    window.location.reload();
  }

}
