import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerpopComponent } from './partnerpop.component';

describe('PartnerpopComponent', () => {
  let component: PartnerpopComponent;
  let fixture: ComponentFixture<PartnerpopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnerpopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartnerpopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
