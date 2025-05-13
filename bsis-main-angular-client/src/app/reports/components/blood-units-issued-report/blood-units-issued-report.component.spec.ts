import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodUnitsIssuedReportComponent } from './blood-units-issued-report.component';

describe('BloodUnitsIssuedReportComponent', () => {
  let component: BloodUnitsIssuedReportComponent;
  let fixture: ComponentFixture<BloodUnitsIssuedReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BloodUnitsIssuedReportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BloodUnitsIssuedReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
