import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentReportComponent } from './component-report.component';

describe('ComponentReportComponent', () => {
  let component: ComponentReportComponent;
  let fixture: ComponentFixture<ComponentReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentReportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
