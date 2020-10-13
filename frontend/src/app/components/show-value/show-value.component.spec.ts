import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowValueComponent } from './show-value.component';

describe('ShowValueComponent', () => {
  let component: ShowValueComponent;
  let fixture: ComponentFixture<ShowValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
