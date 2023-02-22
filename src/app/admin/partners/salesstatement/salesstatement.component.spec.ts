import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesstatementComponent } from './salesstatement.component';

describe('SalesstatementComponent', () => {
  let component: SalesstatementComponent;
  let fixture: ComponentFixture<SalesstatementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesstatementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesstatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
