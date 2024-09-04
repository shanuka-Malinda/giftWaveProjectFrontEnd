import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GiftItemsService {

  private api='http://localhost:8080/api/items';
  constructor(private http:HttpClient) { }

  getAllGiftItems(): Observable<any> {
    return this.http.get(this.api + "/getAll");
  }
  addGiftItem(product: any): Observable<any> {
    return this.http.post<any>(this.api+"/add", product);
  }

  
}