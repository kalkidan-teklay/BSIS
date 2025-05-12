import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageDonorAppointmentComponent } from './manage-donor-appointment.component';

describe('ManageDonorAppointmentComponent', () => {
  let component: ManageDonorAppointmentComponent;
  let fixture: ComponentFixture<ManageDonorAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageDonorAppointmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageDonorAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
