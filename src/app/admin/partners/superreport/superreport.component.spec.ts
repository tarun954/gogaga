import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperreportComponent } from './superreport.component';

describe('SuperreportComponent', () => {
  let component: SuperreportComponent;
  let fixture: ComponentFixture<SuperreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperreportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
