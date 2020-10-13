import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CreditService } from 'src/app/services/credit.service';
import { environment} from '../../../environments/environment.dev';

@Component({
  selector: 'app-show-value',
  templateUrl: './show-value.component.html',
  styleUrls: ['./show-value.component.scss']
})
export class ShowValueComponent {
  @Input() set modAmount(amount: number) {
    this.modifyAmount(amount);
  }
  //assigns a variable the standard value of the credit and formats it 
  initialValue = environment.DEFAULTCREDITVALUE;
  amountChange: Observable<any>;
  constructor(private creditService: CreditService) {
    this.creditService.emitAmountChange.subscribe(item => {
      this.modifyAmount(item);
    })
   }

  modifyAmount(amount: number) {
    this.initialValue = this.initialValue - amount;
  }

}
