import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsLargeGroupComponent } from './cards-large-group.component';

describe('CardsLargeGroupComponent', () => {
  let component: CardsLargeGroupComponent;
  let fixture: ComponentFixture<CardsLargeGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsLargeGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsLargeGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
