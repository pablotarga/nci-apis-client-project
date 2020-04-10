import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountLodgementComponent } from './account-lodgement.component';

describe('AccountLodgementComponent', () => {
  let component: AccountLodgementComponent;
  let fixture: ComponentFixture<AccountLodgementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountLodgementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountLodgementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
