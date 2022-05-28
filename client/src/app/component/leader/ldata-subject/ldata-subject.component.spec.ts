import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LdataSubjectComponent } from './ldata-subject.component';

describe('LdataSubjectComponent', () => {
  let component: LdataSubjectComponent;
  let fixture: ComponentFixture<LdataSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LdataSubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LdataSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
