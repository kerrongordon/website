import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core'

@Component({
  selector: 'kgp-card-content',
  templateUrl: './card-content.component.html',
  styleUrls: ['./card-content.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardContentComponent implements OnInit {

  @Input() ctitle: string
  @Input() content: string
  @Input() month: string
  @Input() day: number
  @Input() year: number

  public monthS: string

  ngOnInit() {
    this.constr()
  }

  constr() {
    if (!this.month) { return }
    const mk = this.month.slice(0, 3)
    return this.monthS = mk
  }

}
