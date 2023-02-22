import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortfallformComponent } from './shortfallform.component';

describe('ShortfallformComponent', () => {
  let component: ShortfallformComponent;
  let fixture: ComponentFixture<ShortfallformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortfallformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShortfallformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
