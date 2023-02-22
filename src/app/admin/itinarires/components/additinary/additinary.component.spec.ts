import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditinaryComponent } from './additinary.component';

describe('AdditinaryComponent', () => {
  let component: AdditinaryComponent;
  let fixture: ComponentFixture<AdditinaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditinaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdditinaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
