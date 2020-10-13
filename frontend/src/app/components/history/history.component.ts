import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  ELEMENT_DATA :any = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  ];
  displayedColumns: string[] = ['Total Hours Worked', 'Total Extras', 'Nightly Extras', 'Sunday Hours',
 'Sunday nightly Extras', 'Normal Hours'];
  dataSource = this.ELEMENT_DATA;

  searchWeek: FormGroup;
  constructor(private formBuilder: FormBuilder
  ) {
    this.searchWeek = this.formBuilder.group({
      registrationNumber: '',
      weekNumber: '',
    });
  }

  ngOnInit() { }

  consult(values) {
    console.log(values);
    const div = document.getElementById('consultDiv');
    div.style.display = 'block';
  }

}
