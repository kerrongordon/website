import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardInforComponent } from './card-infor.component';

describe('CardInforComponent', () => {
  let component: CardInforComponent;
  let fixture: ComponentFixture<CardInforComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardInforComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardInforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
