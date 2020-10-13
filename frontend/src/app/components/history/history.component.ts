import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PeriodicElement } from 'src/app/models/periodic.model';
import { CreditService } from 'src/app/services/credit.service';
import { ELEMENT_DATA } from 'src/app/utils/const';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  dataSource;
  dataSourceRejected;
  displayedColumns = ['name', 'surName', 'email', 'date', 'clientId', 'approved', 'id', 'creditAmount'];

  creditForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private creditService: CreditService
    ) {
      this.creditForm = this.formBuilder.group({
        registrationNumber: '',
        weekNumber: '',
      });
    }

  ngOnInit() {

  }

  check(event) {
    console.log(event);
    
  }
  
}
