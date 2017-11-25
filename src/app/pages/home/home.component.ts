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

  skillsInit: any = [1, 2, 3, 4, 5, 6, 7, 8]

  constructor(public docOb: DescriptionService, public skillOb: SkillsService) {
    this.skillOb.skills.subscribe(data => this.skillsInit = data)
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.docOb.docsSub.unsubscribe()
  }

}
