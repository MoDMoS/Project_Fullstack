import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LstudentListComponent } from './lstudent-list.component';

describe('LstudentListComponent', () => {
  let component: LstudentListComponent;
  let fixture: ComponentFixture<LstudentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LstudentListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LstudentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
