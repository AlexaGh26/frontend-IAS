import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreditService {
  emitAmountChange: BehaviorSubject<any> = new BehaviorSubject('');
  constructor(private http: HttpClient) { 
    
  }

  get approvedCredits(): Promise<any> {
   return this.http.get('http://localhost:3000/credits?approved=true').toPromise();
  }
  get rejectedCredits(): Promise<any> {
   return this.http.get('http://localhost:3000/credits?approved=false').toPromise();
  }

  credit(body:any) {
    fetch('http://localhost:3000/credits', {
      method: 'POST', 
      body: JSON.stringify(body), 
      headers: { 
      'Content-Type': 'application/json'
    }}).then(() => {
      if (body.approved) {
        this.emitChange(body.creditAmount);
      }
    })
  }

  emitChange(amount) {
   this.emitAmountChange.next(amount);
  }
}
