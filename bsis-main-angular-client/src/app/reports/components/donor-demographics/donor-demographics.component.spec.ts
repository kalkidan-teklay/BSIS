import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorDemographicsComponent } from './donor-demographics.component';

describe('DonorDemographicsComponent', () => {
  let component: DonorDemographicsComponent;
  let fixture: ComponentFixture<DonorDemographicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonorDemographicsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonorDemographicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
