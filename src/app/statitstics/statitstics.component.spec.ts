import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatitsticsComponent } from './statitstics.component';

describe('StatitsticsComponent', () => {
  let component: StatitsticsComponent;
  let fixture: ComponentFixture<StatitsticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatitsticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatitsticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
