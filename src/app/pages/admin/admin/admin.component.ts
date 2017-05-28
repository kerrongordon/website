import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { AppService } from '../../../services/app.service';

import { PortfoliosService } from '../../../services/firebase/portfolios/portfolios.service';
import { SkillsService } from '../../../services/firebase/skills/skills.service';
import { DescriptionService } from '../../../services/firebase/description/description.service';

@Component({
  selector: 'kg-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass'],
  providers: [AuthService, AppService, PortfoliosService, SkillsService, DescriptionService]
})
export class AdminComponent implements OnInit, OnDestroy {

  infor: any;
  public auth: any;
  public portfolios: any;
  public description: any;
  public skills: any;
  public itemToBeRemoveTitle: any;

  public title: string;
  public level: string;

  public skillId: string;
  public getskillId: any;

  public toggleDes: string;
  public toggleDesp: string;
  public toggledialog: string;
  public toggledialogSkill: string;

  private selectitem: string;

  public newSkillTitle: string;
  public newSkillLevel: string;

  public email = 'kgpsounds.com@gmail.com';
  public authEmail = false;

  private body = document.getElementsByTagName('body');

  constructor(
    private user: AuthService,
    private app: AppService,
    private _portfoliosService: PortfoliosService,
    private _skillsService: SkillsService,
    private _descriptionService: DescriptionService
  ) { }

  ngOnInit() {
    this.userInfor();
    this.getSkills();
    this.getPortfolios();
    this.userDescription();
  }

  public hide() {
    return this.body[0].style.overflow = 'hidden';
  }

  public show() {
    return this.body[0].style.overflow = '';
  }

  public userInfor() {
    return this.user.isAuth().authState.subscribe(data => {
      this.auth = data;
      if (data === null) { return }
      if (data.providerData[0].email === this.email) {
        this.authEmail = true;
      }
    });
  }

  public getPortfolios() {
    return this._portfoliosService.getListPortfolios().subscribe(data => this.portfolios = data);
  }

  public getSkills() {
    return this._skillsService.getListOfSkills().subscribe(data => this.skills = data);
  }

  public openASkill(key?) {
    this.skillId = key;
    return this._skillsService.getSkillObject(key).subscribe(data => {
      this.getskillId = data;
      this.newSkillTitle = data.title;
      this.newSkillLevel = data.level;
      this.toggledialogSkill = 'show';
      this.hide();
    });
  }

  public removePortfolio(key?) {
    this.selectitem = key
    return this._portfoliosService.getPortfolioObject(key).subscribe(data => {
      this.itemToBeRemoveTitle = data.title;
      this.toggledialog = 'show';
      this.hide();
    });
  }

  public deletePortfolio() {
    return this._portfoliosService.getPortfolioObject(this.selectitem).remove()
      .then(() => {this.toggledialog = ''; this.show();})
      .catch(error => console.log(error));
  }

  public updateSkillTitle(title) {
    return this.newSkillTitle = title;
  }

  public updateSkillLevel(level) {
    return this.newSkillLevel = level;
  }

  public updateSkill() {
    const skill = {
      title: this.newSkillTitle,
      level: this.newSkillLevel
    }
    return this._skillsService.getSkillObject(this.skillId).update(skill)
      .then(() => {this.toggledialogSkill = 'hide'; this.show();});
  }

  public goToPortfolio(key) {
    return this.app.goToPortfolioPage(key);
  }

  public userDescription() {
    return this._descriptionService.getDescription().subscribe(data => this.description = data);
  }

  public editDescription(): void {
    this.toggleDes = 'show';
    this.toggleDesp = 'hide';
  }

  public doneEditDescription(): void {
    this.toggleDes = 'hide';
    this.toggleDesp = 'show';
  }

  public editDescriptionInfo(data) {
    const description = { description: data }
    return this._descriptionService.getDescription().update(description);
  }

  ngOnDestroy() {
    this.userInfor().unsubscribe();
    this.getSkills().unsubscribe();
    this.getPortfolios().unsubscribe();
    this.userDescription().unsubscribe();
    this.openASkill().unsubscribe();
    this.removePortfolio().unsubscribe();
  }

}
