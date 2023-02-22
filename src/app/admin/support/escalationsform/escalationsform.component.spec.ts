import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscalationsformComponent } from './escalationsform.component';

describe('EscalationsformComponent', () => {
  let component: EscalationsformComponent;
  let fixture: ComponentFixture<EscalationsformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscalationsformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EscalationsformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
