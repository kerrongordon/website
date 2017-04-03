import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioCardImageComponent } from './portfolio-card-image.component';

describe('PortfolioCardImageComponent', () => {
  let component: PortfolioCardImageComponent;
  let fixture: ComponentFixture<PortfolioCardImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioCardImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioCardImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
