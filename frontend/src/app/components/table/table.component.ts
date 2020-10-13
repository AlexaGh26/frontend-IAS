import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {PeriodicElement} from '../../models/periodic.model'
import {ELEMENT_DATA} from '../../utils/const'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  

  @Input() dataSource: MatTableDataSource<PeriodicElement>;
  @Input() displayedColumns :string[];

  constructor() { }

  ngOnInit(): void {}

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
  }


}
