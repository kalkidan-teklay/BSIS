import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscardsReportComponent } from './discards-report.component';

describe('DiscardsReportComponent', () => {
  let component: DiscardsReportComponent;
  let fixture: ComponentFixture<DiscardsReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscardsReportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscardsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
