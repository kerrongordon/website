import { Component, Input, ChangeDetectionStrategy } from '@angular/core'

@Component({
  selector: 'kgp-social-icon',
  templateUrl: './social-icon.component.html',
  styleUrls: ['./social-icon.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SocialIconComponent {
  @Input() Facebook: string
  @Input() Twitter: string
  @Input() Google: string
  @Input() Linkedin: string
  @Input() Github: string
}
