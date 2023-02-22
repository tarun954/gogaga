import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmendComponent } from './confirmend.component';

describe('ConfirmendComponent', () => {
  let component: ConfirmendComponent;
  let fixture: ComponentFixture<ConfirmendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmendComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
