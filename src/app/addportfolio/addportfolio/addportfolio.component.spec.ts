import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddportfolioComponent } from './addportfolio.component';

describe('AddportfolioComponent', () => {
  let component: AddportfolioComponent;
  let fixture: ComponentFixture<AddportfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddportfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddportfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
