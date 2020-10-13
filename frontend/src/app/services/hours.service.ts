import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HoursService {
    emitAmountChange: BehaviorSubject<any> = new BehaviorSubject('');
    constructor(private http: HttpClient) {

    }
}
