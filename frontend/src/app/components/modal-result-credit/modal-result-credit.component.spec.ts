import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { modalResultCreditComponent } from './modal-result-credit.component';

describe('DialogElementsExampleDialogComponent', () => {
  let component: modalResultCreditComponent;
  let fixture: ComponentFixture<modalResultCreditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ modalResultCreditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(modalResultCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
