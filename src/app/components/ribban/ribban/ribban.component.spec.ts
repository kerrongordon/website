import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RibbanComponent } from './ribban.component';

describe('RibbanComponent', () => {
  let component: RibbanComponent;
  let fixture: ComponentFixture<RibbanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RibbanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RibbanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
