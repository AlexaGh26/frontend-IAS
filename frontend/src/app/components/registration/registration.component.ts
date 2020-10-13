import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import * as moment from 'moment';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import { environment } from 'src/environments/environment.dev';


export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})
export class RegistrationComponent implements OnInit {

  date = new FormControl();
  showModal = false;
  resultCredit : number;
  email = new FormControl('', [Validators.required, Validators.email]);
  creditForm: FormGroup;
  constructor(private formBuilder: FormBuilder
    ) {
      this.creditForm = this.formBuilder.group({
        registrationNumber: '',
        hours: '',
        email: new FormControl('', [Validators.required, Validators.email]),
        date: '',
        creditAmount: '',
        clientId: ''
      });
    }
  ngOnInit(): void {}

}
