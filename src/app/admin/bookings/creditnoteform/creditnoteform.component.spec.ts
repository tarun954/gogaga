import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditnoteformComponent } from './creditnoteform.component';

describe('CreditnoteformComponent', () => {
  let component: CreditnoteformComponent;
  let fixture: ComponentFixture<CreditnoteformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditnoteformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditnoteformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
