import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTestBatchesComponent } from './manage-test-batches.component';

describe('ManageTestBatchesComponent', () => {
  let component: ManageTestBatchesComponent;
  let fixture: ComponentFixture<ManageTestBatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageTestBatchesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageTestBatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
