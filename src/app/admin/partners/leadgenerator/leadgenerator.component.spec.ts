import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadgeneratorComponent } from './leadgenerator.component';

describe('LeadgeneratorComponent', () => {
  let component: LeadgeneratorComponent;
  let fixture: ComponentFixture<LeadgeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeadgeneratorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeadgeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
