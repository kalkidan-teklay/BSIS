import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuplicateDonorsComponent } from './duplicate-donors.component';

describe('DuplicateDonorsComponent', () => {
  let component: DuplicateDonorsComponent;
  let fixture: ComponentFixture<DuplicateDonorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DuplicateDonorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DuplicateDonorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
