import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsProducedReportComponent } from './components-produced-report.component';

describe('ComponentsProducedReportComponent', () => {
  let component: ComponentsProducedReportComponent;
  let fixture: ComponentFixture<ComponentsProducedReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentsProducedReportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentsProducedReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
