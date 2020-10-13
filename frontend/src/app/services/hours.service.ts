import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { hpursRegisterModel } from '../models/hoursRegiter.model';

@Injectable({
    providedIn: 'root'
})
export class HoursService {

    port = 'http://localhost:3001'

    constructor(private http: HttpClient) {

    }
    saveRegister$(body):Observable<object> {
        return this.http.post(`${this.port}/form`, body)
    };
}
