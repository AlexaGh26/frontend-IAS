import { Component, OnInit } from '@angular/core';
import {finalize, map, mergeMap, switchMap, takeUntil, tap} from 'rxjs/operators';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { HoursService } from '../../services/hours.service'
import { Subject } from 'rxjs';

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
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class RegistrationComponent implements OnInit {
  destroy$: Subject<boolean> = new Subject();
  favoriteSeason: string;
  seasons: string[] = ['Emergency Service', 'Technical Service'];
  date = new FormControl();
  resultCredit: number;
  email = new FormControl('', [Validators.required]);
  registerForm: FormGroup;
  dateFormat = 'DD/MM/YYYY HH:mm:ss';

  constructor(private formBuilder: FormBuilder,
    private hoursService: HoursService,
  ) {
    this.registerForm = this.formBuilder.group({
      registrationNumber: ['', Validators.required],
      dateInit: ['', Validators.required],
      hoursInit: ['', Validators.required],
      dateEnd: ['', Validators.required],
      hoursEnd: ['', Validators.required],
      typeService: ['', Validators.required],
    });
  }
  ngOnInit(): void { }

  sendInformation(values) {
    console.log(values);
    this.hoursService.saveRegister$(values)
      .pipe(
        takeUntil(this.destroy$)
      ).subscribe()
  }
  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}

