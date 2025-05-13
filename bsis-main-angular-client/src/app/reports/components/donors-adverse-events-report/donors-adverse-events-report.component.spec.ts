import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorsAdverseEventsReportComponent } from './donors-adverse-events-report.component';

describe('DonorsAdverseEventsReportComponent', () => {
  let component: DonorsAdverseEventsReportComponent;
  let fixture: ComponentFixture<DonorsAdverseEventsReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonorsAdverseEventsReportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonorsAdverseEventsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
