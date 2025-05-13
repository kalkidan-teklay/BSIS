import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorsDeferredReportComponent } from './donors-deferred-report.component';

describe('DonorsDeferredReportComponent', () => {
  let component: DonorsDeferredReportComponent;
  let fixture: ComponentFixture<DonorsDeferredReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonorsDeferredReportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonorsDeferredReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
