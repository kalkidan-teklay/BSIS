import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTestSamplesComponent } from './view-test-samples.component';

describe('ViewTestSamplesComponent', () => {
  let component: ViewTestSamplesComponent;
  let fixture: ComponentFixture<ViewTestSamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewTestSamplesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewTestSamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
