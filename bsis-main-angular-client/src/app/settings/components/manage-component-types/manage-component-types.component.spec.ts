import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageComponentTypesComponent } from './manage-component-types.component';

describe('ManageComponentTypesComponent', () => {
  let component: ManageComponentTypesComponent;
  let fixture: ComponentFixture<ManageComponentTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageComponentTypesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageComponentTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
