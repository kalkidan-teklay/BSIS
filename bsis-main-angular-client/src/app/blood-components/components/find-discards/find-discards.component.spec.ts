import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindDiscardsComponent } from './find-discards.component';

describe('FindDiscardsComponent', () => {
  let component: FindDiscardsComponent;
  let fixture: ComponentFixture<FindDiscardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindDiscardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindDiscardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
