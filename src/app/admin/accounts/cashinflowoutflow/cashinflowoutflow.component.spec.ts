import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashinflowoutflowComponent } from './cashinflowoutflow.component';

describe('CashinflowoutflowComponent', () => {
  let component: CashinflowoutflowComponent;
  let fixture: ComponentFixture<CashinflowoutflowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashinflowoutflowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CashinflowoutflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
