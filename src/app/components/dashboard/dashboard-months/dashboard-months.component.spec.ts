import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardMonthsComponent } from './dashboard-months.component';

describe('DashboardMonthsComponent', () => {
  let component: DashboardMonthsComponent;
  let fixture: ComponentFixture<DashboardMonthsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardMonthsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardMonthsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
