import { A11yModule } from '@angular/cdk/a11y';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { HoursService } from 'src/app/services/hours.service';
import * as moment from 'moment';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  destroy$: Subject<boolean> = new Subject();
  ELEMENT_DATA :any = [];
  displayedColumns: string[] = ['Total Hours Worked', 'Total Extras', 'Nightly Extras', 'Sunday Hours',
 'Sunday nightly Extras', 'Normal Hours'];

 dateEnd:any;
 dateInit:any;
 idTechnical:number;

  dataSource = this.ELEMENT_DATA;

  searchWeek: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private hoursService: HoursService,
  ) {
    this.searchWeek = this.formBuilder.group({
      registrationNumber: ['', Validators.required],
      weekNumber: ['', Validators.required],
    });
  }

  ngOnInit() { }

  showDiv() {
    const div = document.getElementById('consultDiv');
    div.style.display = 'block';
  }

  consult(value) {
    this.showDiv();
    this.hoursService.searchRegister$(value)
    .pipe(
      takeUntil(this.destroy$),
      tap( (data: Array<any>) => {
        const [ hoursResume ] = data
        const {HoursWorkedWeek, dateEnd, dateInit, normalHours, sundayNightExtraHours,
          totalExtraHours, totalHoursExtraNight, totalSundayHours} =  hoursResume
          this.dataSource = this.ELEMENT_DATA  = [
          {TotalHoursWorked: HoursWorkedWeek, TotalExtras: totalExtraHours, NightlyExtra: totalHoursExtraNight,
            SundayHours: totalSundayHours, SundayNightlyExtras: sundayNightExtraHours, NormalHours: normalHours},
        ];
        this.dateEnd = moment(dateEnd, 'DD/MM/YYYY').format('DD/MM/YYYY');
        this.dateInit = moment(dateInit, 'DD/MM/YYYY').format('DD/MM/YYYY');
        this.idTechnical = this.searchWeek.value.registrationNumber;
      })
    ).subscribe()
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}

