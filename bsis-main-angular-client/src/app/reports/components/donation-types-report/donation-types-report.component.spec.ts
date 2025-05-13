import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationTypesReportComponent } from './donation-types-report.component';

describe('DonationTypesReportComponent', () => {
  let component: DonationTypesReportComponent;
  let fixture: ComponentFixture<DonationTypesReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonationTypesReportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonationTypesReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
