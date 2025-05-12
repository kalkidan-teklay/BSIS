import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindTestSamplesComponent } from './find-test-samples.component';

describe('FindTestSamplesComponent', () => {
  let component: FindTestSamplesComponent;
  let fixture: ComponentFixture<FindTestSamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindTestSamplesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindTestSamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
