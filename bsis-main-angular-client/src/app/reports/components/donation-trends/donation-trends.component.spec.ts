import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationTrendsComponent } from './donation-trends.component';

describe('DonationTrendsComponent', () => {
  let component: DonationTrendsComponent;
  let fixture: ComponentFixture<DonationTrendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonationTrendsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonationTrendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
