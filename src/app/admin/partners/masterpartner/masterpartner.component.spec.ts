import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterpartnerComponent } from './masterpartner.component';

describe('MasterpartnerComponent', () => {
  let component: MasterpartnerComponent;
  let fixture: ComponentFixture<MasterpartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterpartnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterpartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
