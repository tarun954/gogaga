import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReiumbersementComponent } from './reiumbersement.component';

describe('ReiumbersementComponent', () => {
  let component: ReiumbersementComponent;
  let fixture: ComponentFixture<ReiumbersementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReiumbersementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReiumbersementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
