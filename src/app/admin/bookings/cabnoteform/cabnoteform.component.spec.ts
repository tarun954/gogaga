import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabnoteformComponent } from './cabnoteform.component';

describe('CabnoteformComponent', () => {
  let component: CabnoteformComponent;
  let fixture: ComponentFixture<CabnoteformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabnoteformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CabnoteformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
