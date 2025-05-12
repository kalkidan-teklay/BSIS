import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileClinicExportComponent } from './mobile-clinic-export.component';

describe('MobileClinicExportComponent', () => {
  let component: MobileClinicExportComponent;
  let fixture: ComponentFixture<MobileClinicExportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileClinicExportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileClinicExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
