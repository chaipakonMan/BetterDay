import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable()
export class DataAccessingService {

    constructor(private http: HttpClient) {

    }

    addRecord(dayNum:number, calOfDay:number){
        console.log("sending data to backend");

        let httpHeaders = new HttpHeaders({
            "dayNum":String(dayNum),
            "calOfDay":String(calOfDay)
        });
        this.http.post("http://localhost:8080/bd/addRecord", "", { headers: httpHeaders }).subscribe();
    }

    getRecords(){
        return this.http.get<any>("http://localhost:8080/bd/getRecords");
        // this.http.get<any>("http://localhost:8080/bd/getRecords").toPromise()
        // .then(
        //     data => {
        //         this.response = data;
        //         console.log(this.response);
        //         return this.response;
        //     }
        // );
        // To deal with sync problem, return it as an obserable and let the caller deal with waiting!
    }

}
