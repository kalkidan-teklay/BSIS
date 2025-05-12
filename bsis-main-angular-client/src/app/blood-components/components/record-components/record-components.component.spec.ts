import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordComponentsComponent } from './record-components.component';

describe('RecordComponentsComponent', () => {
  let component: RecordComponentsComponent;
  let fixture: ComponentFixture<RecordComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecordComponentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecordComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
