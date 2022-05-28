import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeSubComponent } from './change-sub.component';

describe('ChangeSubComponent', () => {
  let component: ChangeSubComponent;
  let fixture: ComponentFixture<ChangeSubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeSubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
