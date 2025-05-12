import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewExportDonorListComponent } from './view-export-donor-list.component';

describe('ViewExportDonorListComponent', () => {
  let component: ViewExportDonorListComponent;
  let fixture: ComponentFixture<ViewExportDonorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewExportDonorListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewExportDonorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
