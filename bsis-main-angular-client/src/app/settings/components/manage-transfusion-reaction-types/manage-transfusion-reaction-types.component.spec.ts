import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTransfusionReactionTypesComponent } from './manage-transfusion-reaction-types.component';

describe('ManageTransfusionReactionTypesComponent', () => {
  let component: ManageTransfusionReactionTypesComponent;
  let fixture: ComponentFixture<ManageTransfusionReactionTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageTransfusionReactionTypesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageTransfusionReactionTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
