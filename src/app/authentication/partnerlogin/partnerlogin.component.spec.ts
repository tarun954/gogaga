import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerloginComponent } from './partnerlogin.component';

describe('PartnerloginComponent', () => {
  let component: PartnerloginComponent;
  let fixture: ComponentFixture<PartnerloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnerloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartnerloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
