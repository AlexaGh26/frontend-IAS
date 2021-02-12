import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisComponent } from './regis.component';
import { MenuModule } from '../menu/menu.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, formatCurrency } from "@angular/common";
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HoursService } from 'src/app/services/hours.service';
import { of } from 'rxjs';


describe('RegistrationComponent', () => {
  let component: RegisComponent;
  let fixture: ComponentFixture<RegisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisComponent ],
      imports: [
        MenuModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        BrowserModule,
        CommonModule,
        MatButtonModule,
        MatCardModule,
        MatDatepickerModule,
        ReactiveFormsModule,
        MatRadioModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        BrowserAnimationsModule
      ],
      providers: [
        {
          provide: HoursService,
          useValue: {saveRegister$: (param) => of() }
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should send the information', () => {
    component.registerForm.setValue({
      registrationNumber: '123',
      dateInit: '123',
      hoursInit: 123,
      dateEnd: '123',
      hoursEnd: '123',
      typeService: '123',
    })
    spyOn(component, 'validationDate').and.returnValue(false);
    component.sendInformation({
      "idTechnical" : 63463809,
      "dateInit": "11/10/2020",
      "dateEnd": "13/10/2020",
      "typeService" : "1"
  });
  expect(component.registerForm.value).toBeTruthy();
  })

  it('Should validate the init before the end date', () => {
    component.registerForm.setValue({
      registrationNumber: '123',
      dateInit: '06/10/2020 08:00:00',
      dateEnd: '05/10/2020 08:00:00',
      hoursInit: 123,
      hoursEnd: '123',
      typeService: '123',
    })
    expect(component.validationDate(component.registerForm)).toBeFalse();
  })
});
