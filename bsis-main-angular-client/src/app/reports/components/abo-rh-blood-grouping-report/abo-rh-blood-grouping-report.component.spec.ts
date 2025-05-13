import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ABORhBloodGroupingReportComponent } from './abo-rh-blood-grouping-report.component';

describe('ABORhBloodGroupingReportComponent', () => {
  let component: ABORhBloodGroupingReportComponent;
  let fixture: ComponentFixture<ABORhBloodGroupingReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ABORhBloodGroupingReportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ABORhBloodGroupingReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
