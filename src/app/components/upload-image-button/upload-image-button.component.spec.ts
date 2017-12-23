import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadImageButtonComponent } from './upload-image-button.component';

describe('UploadImageButtonComponent', () => {
  let component: UploadImageButtonComponent;
  let fixture: ComponentFixture<UploadImageButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadImageButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadImageButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
