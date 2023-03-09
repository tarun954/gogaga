import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnersigupComponent } from './partnersigup.component';

describe('PartnersigupComponent', () => {
  let component: PartnersigupComponent;
  let fixture: ComponentFixture<PartnersigupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnersigupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartnersigupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
