import { Component, OnInit, OnDestroy } from '@angular/core'
import { DescriptionService } from '../../services/description/description.service'
import { SkillsService } from '../../services/skills/skills.service'

@Component({
  selector: 'kgp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  providers: [DescriptionService, SkillsService]
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor(public docOb: DescriptionService, public skillOb: SkillsService) { }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.docOb.docsSub.unsubscribe()
  }

}
