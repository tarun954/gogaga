import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpsalaryComponent } from './empsalary.component';

describe('EmpsalaryComponent', () => {
  let component: EmpsalaryComponent;
  let fixture: ComponentFixture<EmpsalaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpsalaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpsalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
