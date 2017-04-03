import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioCardInforComponent } from './portfolio-card-infor.component';

describe('PortfolioCardInforComponent', () => {
  let component: PortfolioCardInforComponent;
  let fixture: ComponentFixture<PortfolioCardInforComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioCardInforComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioCardInforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
