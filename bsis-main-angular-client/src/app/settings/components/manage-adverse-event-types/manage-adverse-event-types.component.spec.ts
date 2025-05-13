import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAdverseEventTypesComponent } from './manage-adverse-event-types.component';

describe('ManageAdverseEventTypesComponent', () => {
  let component: ManageAdverseEventTypesComponent;
  let fixture: ComponentFixture<ManageAdverseEventTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageAdverseEventTypesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageAdverseEventTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
