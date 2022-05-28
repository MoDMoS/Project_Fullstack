import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LsidenavComponent } from './lsidenav.component';

describe('LsidenavComponent', () => {
  let component: LsidenavComponent;
  let fixture: ComponentFixture<LsidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LsidenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LsidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
