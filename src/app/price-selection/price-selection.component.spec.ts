import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceSelectionComponent } from './price-selection.component';

describe('PriceSelectionComponent', () => {
  let component: PriceSelectionComponent;
  let fixture: ComponentFixture<PriceSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriceSelectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PriceSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
