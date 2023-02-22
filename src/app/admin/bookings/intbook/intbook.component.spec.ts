import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntbookComponent } from './intbook.component';

describe('IntbookComponent', () => {
  let component: IntbookComponent;
  let fixture: ComponentFixture<IntbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntbookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
