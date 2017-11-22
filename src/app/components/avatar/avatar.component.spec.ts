import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { AvatarComponent } from './avatar.component'

describe('AvatarComponent', () => {
  let component: AvatarComponent
  let fixture: ComponentFixture<AvatarComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvatarComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarComponent)
    component  = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create the kgp-avatar', async(() => {
      const app = fixture.debugElement.componentInstance
      expect(app).toBeTruthy()
  }))

  it('should return an image string', async(() => {
    const image = component.img
    expect(image).toString()
  }))

  it('should render image tag', async(() => {
    const compiled = fixture.debugElement.nativeElement
    expect(compiled.querySelector('img'))
  }))

})
