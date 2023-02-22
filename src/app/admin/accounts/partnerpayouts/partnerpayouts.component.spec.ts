import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerpayoutsComponent } from './partnerpayouts.component';

describe('PartnerpayoutsComponent', () => {
  let component: PartnerpayoutsComponent;
  let fixture: ComponentFixture<PartnerpayoutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnerpayoutsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartnerpayoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
