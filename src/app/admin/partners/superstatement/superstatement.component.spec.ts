import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperstatementComponent } from './superstatement.component';

describe('SuperstatementComponent', () => {
  let component: SuperstatementComponent;
  let fixture: ComponentFixture<SuperstatementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperstatementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperstatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
