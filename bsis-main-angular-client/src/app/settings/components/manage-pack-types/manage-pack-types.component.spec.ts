import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePackTypesComponent } from './manage-pack-types.component';

describe('ManagePackTypesComponent', () => {
  let component: ManagePackTypesComponent;
  let fixture: ComponentFixture<ManagePackTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagePackTypesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagePackTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
