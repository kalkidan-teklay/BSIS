import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageDiscardReasonsComponent } from './manage-discard-reasons.component';

describe('ManageDiscardReasonsComponent', () => {
  let component: ManageDiscardReasonsComponent;
  let fixture: ComponentFixture<ManageDiscardReasonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageDiscardReasonsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageDiscardReasonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
