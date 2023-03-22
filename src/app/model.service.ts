import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, filter, tap } from 'rxjs/operators'
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  jsonData: BehaviorSubject<any> = new BehaviorSubject([]);

  constructor(private http: HttpClient) {
    let request = this.http.get('assets/product-fixtures.json', {responseType: 'text'});
    let filteredRequest = request.pipe(
      map((data) => { 
        let fixedData = data.replace(/[\u2018\u2019]/g, "'")
                          .replace(/[\u201C\u201D]/g, '"');
        return JSON.parse(fixedData);
      })
    ).subscribe((newData) => {
      this.jsonData.next(newData);
    })

  }
    
}
