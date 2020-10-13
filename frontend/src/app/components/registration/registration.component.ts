import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import * as moment from 'moment';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import { environment } from 'src/environments/environment.dev';
import { CreditService } from 'src/app/services/credit.service';


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
  constructor(private formBuilder: FormBuilder, private creditService: CreditService
    ) {
      this.creditForm = this.formBuilder.group({
        name: '',
        surName: '',
        email: new FormControl('', [Validators.required, Validators.email]),
        date: '',
        creditAmount: '',
        clientId: ''
      });
    }


  ngOnInit(): void {}

  getErrorMessage() {
    this.email.hasError('required') ? '' : '';
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  approbalCredit(){
    const creditAmount = this.creditForm.controls['creditAmount'].value;
    const date = moment(this.creditForm.controls['date'].value).toLocaleString();
    const approved = this.randmApproval() ;
    
    if(creditAmount <= environment.DEFAULTCREDITVALUE) {
      const body = {
        ...this.creditForm.value,
        date,
        approved
      };
      environment.DEFAULTCREDITVALUE = environment.DEFAULTCREDITVALUE - creditAmount;
      this.creditService.credit(body);
    }

   
  }

  randmApproval(): boolean {
    const result = !!(Math.round(Math.random()))
    if (result) {
      this.showModal = true;
      this.resultCredit = 1;
    } else {
      this.showModal = true;
      this.resultCredit = 0;
    }
    return (result)
  }
  
  
}
