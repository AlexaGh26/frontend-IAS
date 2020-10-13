import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-result-credit',
  templateUrl: './modal-result-credit.html',
  styleUrls: ['./modal-result-credit.component.scss']
})
export class modalResultCreditComponent implements OnInit {

  title = "your credit score";

  constructor() { }

  ngOnInit(): void {
  }

}
