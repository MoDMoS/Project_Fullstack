import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSubComponent } from './table-sub.component';

describe('TableSubComponent', () => {
  let component: TableSubComponent;
  let fixture: ComponentFixture<TableSubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableSubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
