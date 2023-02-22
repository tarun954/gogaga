import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabcreditnoteComponent } from './cabcreditnote.component';

describe('CabcreditnoteComponent', () => {
  let component: CabcreditnoteComponent;
  let fixture: ComponentFixture<CabcreditnoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabcreditnoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CabcreditnoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
