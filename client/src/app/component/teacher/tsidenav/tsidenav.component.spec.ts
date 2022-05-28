import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TsidenavComponent } from './tsidenav.component';

describe('TsidenavComponent', () => {
  let component: TsidenavComponent;
  let fixture: ComponentFixture<TsidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TsidenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TsidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
