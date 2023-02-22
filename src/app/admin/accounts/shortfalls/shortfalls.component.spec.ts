import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortfallsComponent } from './shortfalls.component';

describe('ShortfallsComponent', () => {
  let component: ShortfallsComponent;
  let fixture: ComponentFixture<ShortfallsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortfallsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShortfallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
