import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HistoryComponent} from './history.component'
import {MatMenuModule} from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTabsModule} from '@angular/material/tabs';
import { MenuModule } from '../menu/menu.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatGridListModule} from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationPlayer, query } from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HoursService } from 'src/app/services/hours.service';
import { of } from 'rxjs';


describe('HistoryComponent', () => {
  let component: HistoryComponent;
  let fixture: ComponentFixture<HistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryComponent ],
      imports: [
        MatButtonModule,
        MatMenuModule,
        RouterModule,
        MenuModule,
        CommonModule,
        MatTableModule,
        MatPaginatorModule,
        MatTabsModule,
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
        MatGridListModule,
        CommonModule,
        ReactiveFormsModule,
        HttpClientModule,
        BrowserModule,
        BrowserAnimationsModule
      ],
      providers: [
        {
          provide: HoursService,
          useValue: {searchRegister$ :(param) => of([
            {
                "HoursWorkedWeek": 50,
                "totalExtraHours": 28,
                "totalHoursExtraNight": 9,
                "totalSundayHours": 15,
                "sundayNightExtraHours": 4,
                "normalHours": 22,
                "dateInit": "09/03/2020 00:00:00",
                "dateEnd": "15/03/2020 00:00:00",
                "validation": 1
            }
        ])}
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should query the results' , () => {
    expect(component.consult('')).toBeUndefined();
  })

  it('dateInit should be truthy', () => {
    component.consult('');
    expect(component.dateInit).toBeTruthy();
  })

  it('Should call showDiv', () => {
    component.showDiv();
    expect(document.querySelector('#consultDiv')).toBeTruthy();
  })
});
