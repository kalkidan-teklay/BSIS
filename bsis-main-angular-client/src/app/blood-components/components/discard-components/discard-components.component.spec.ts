import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscardComponentsComponent } from './discard-components.component';

describe('DiscardComponentsComponent', () => {
  let component: DiscardComponentsComponent;
  let fixture: ComponentFixture<DiscardComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscardComponentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscardComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
