import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LsubjectsTaughtComponent } from './lsubjects-taught.component';

describe('LsubjectsTaughtComponent', () => {
  let component: LsubjectsTaughtComponent;
  let fixture: ComponentFixture<LsubjectsTaughtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LsubjectsTaughtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LsubjectsTaughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
