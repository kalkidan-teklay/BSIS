import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageComponentCombinationsComponent } from './manage-component-combinations.component';

describe('ManageComponentCombinationsComponent', () => {
  let component: ManageComponentCombinationsComponent;
  let fixture: ComponentFixture<ManageComponentCombinationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageComponentCombinationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageComponentCombinationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
