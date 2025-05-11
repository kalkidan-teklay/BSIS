import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewStockLevelsComponent } from './view-stock-levels.component';

describe('ViewStockLevelsComponent', () => {
  let component: ViewStockLevelsComponent;
  let fixture: ComponentFixture<ViewStockLevelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewStockLevelsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewStockLevelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
