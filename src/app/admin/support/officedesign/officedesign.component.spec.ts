import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficedesignComponent } from './officedesign.component';

describe('OfficedesignComponent', () => {
  let component: OfficedesignComponent;
  let fixture: ComponentFixture<OfficedesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficedesignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfficedesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
