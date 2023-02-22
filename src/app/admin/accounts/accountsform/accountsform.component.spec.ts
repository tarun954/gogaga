import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsformComponent } from './accountsform.component';

describe('AccountsformComponent', () => {
  let component: AccountsformComponent;
  let fixture: ComponentFixture<AccountsformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountsformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountsformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
