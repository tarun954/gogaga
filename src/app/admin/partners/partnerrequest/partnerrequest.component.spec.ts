import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerrequestComponent } from './partnerrequest.component';

describe('PartnerrequestComponent', () => {
  let component: PartnerrequestComponent;
  let fixture: ComponentFixture<PartnerrequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnerrequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartnerrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
