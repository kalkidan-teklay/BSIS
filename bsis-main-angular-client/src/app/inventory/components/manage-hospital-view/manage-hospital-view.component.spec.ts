import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageHospitalViewComponent } from './manage-hospital-view.component';

describe('ManageHospitalViewComponent', () => {
  let component: ManageHospitalViewComponent;
  let fixture: ComponentFixture<ManageHospitalViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageHospitalViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageHospitalViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
