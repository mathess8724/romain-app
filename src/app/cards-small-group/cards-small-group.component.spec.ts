import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsSmallGroupComponent } from './cards-small-group.component';

describe('CardsSmallGroupComponent', () => {
  let component: CardsSmallGroupComponent;
  let fixture: ComponentFixture<CardsSmallGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsSmallGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsSmallGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
