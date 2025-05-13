import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDonationCounsellingReportComponent } from './post-donation-counselling-report.component';

describe('PostDonationCounsellingReportComponent', () => {
  let component: PostDonationCounsellingReportComponent;
  let fixture: ComponentFixture<PostDonationCounsellingReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostDonationCounsellingReportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostDonationCounsellingReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
