import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { CardContentComponent } from './card-content.component'
import { TruncateModule } from '../../pipe/truncate/truncate.module'

fdescribe('CardContentComponent', () => {
  let component: CardContentComponent
  let fixture: ComponentFixture<CardContentComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TruncateModule],
      declarations: [ CardContentComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(CardContentComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  fit('should create the kgp-content', async(() => {
      expect(component).toBeTruthy()
  }))

  // fit('should return an the title as string', async(() => {
  //   const st = component.ctitle
  //   expect(st).toString()
  // }))

  // fit('should return an the content as string', async(() => {
  //   const st = component.content
  //   expect(st).toString()
  // }))

  // fit('should render link tag', async(() => {
  //   const compiled = fixture.debugElement.nativeElement
  //   expect(compiled.querySelector('a'))
  // }))

})
