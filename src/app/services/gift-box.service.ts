import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GiftBoxService {
  private api = 'http://localhost:8080/api/gift';

  constructor(private http: HttpClient) { }

  // addGiftItem(giftBox: any): Observable<any> {
  //   return this.http.post<any>(this.api + "/create", giftBox, { responseType: 'text' });
  // }
  addGiftItem(giftBox: any): Observable<any> {
    // Set the responseType to 'text' as expected
    return this.http.post(this.api + "/create", giftBox, { responseType: 'json' });
  }
  updatePayment(gift: any): Observable<any> {
    return this.http.put(this.api+"/paid", gift,{ responseType: 'json' });
  }

  getGiftsByUserId(userId: string): Observable<any> {
    return this.http.get(`${this.api}/getAllByUser/${userId}`);
  }
}
