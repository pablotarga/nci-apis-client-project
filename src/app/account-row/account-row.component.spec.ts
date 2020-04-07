import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountRowComponent } from './account-row.component';

describe('AccountRowComponent', () => {
  let component: AccountRowComponent;
  let fixture: ComponentFixture<AccountRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
