import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { CardComponent } from './card.component'
import { RouterTestingModule } from '@angular/router/testing'

describe('CardComponent', () => {
  let component: CardComponent
  let fixture: ComponentFixture<CardComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ CardComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create the kgp-card', async(() => {
      const app = fixture.debugElement.componentInstance
      expect(app).toBeTruthy()
  }))

  it('should return an link url string', async(() => {
    const link = component.Link
    expect(link).toString()
  }))

  it('should render link tag', async(() => {
    const compiled = fixture.debugElement.nativeElement
    expect(compiled.querySelector('a'))
  }))

})
