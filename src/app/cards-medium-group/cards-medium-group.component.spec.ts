import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsMediumGroupComponent } from './cards-medium-group.component';

describe('CardsMediumGroupComponent', () => {
  let component: CardsMediumGroupComponent;
  let fixture: ComponentFixture<CardsMediumGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsMediumGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsMediumGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
