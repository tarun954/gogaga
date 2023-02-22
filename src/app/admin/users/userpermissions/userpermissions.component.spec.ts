import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserpermissionsComponent } from './userpermissions.component';

describe('UserpermissionsComponent', () => {
  let component: UserpermissionsComponent;
  let fixture: ComponentFixture<UserpermissionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserpermissionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserpermissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
