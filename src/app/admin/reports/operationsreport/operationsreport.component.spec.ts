import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationsreportComponent } from './operationsreport.component';

describe('OperationsreportComponent', () => {
  let component: OperationsreportComponent;
  let fixture: ComponentFixture<OperationsreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperationsreportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperationsreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
