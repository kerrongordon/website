import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { AppService } from '../../../services/app.service';

import { PortfoliosService } from '../../../services/firebase/portfolios/portfolios.service';
import { SkillsService } from '../../../services/firebase/skills/skills.service';
import { DescriptionService } from '../../../services/firebase/description/description.service';
import { NotificationService } from '../../../services/notification/notification.service'
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'kg-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass'],
  providers: [AuthService, AppService, PortfoliosService, SkillsService, DescriptionService, NotificationService]
})
export class AdminComponent implements OnInit, OnDestroy {
  itemToBeRemoveLargImage: any;
  itemToBeRemoveThumbnail: any;

  infor: any;
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

  constructor(
    private _title: Title,
    private _authService: AuthService,
    private _appService: AppService,
    private _portfoliosService: PortfoliosService,
    private _skillsService: SkillsService,
    private _descriptionService: DescriptionService,
    private _notificationService: NotificationService
  ) {  }

  ngOnInit() {
    this.getSkills();
    this.getPortfolios();
    this.userDescription();
    this._title.setTitle('Admin');
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
    });
  }

  public removePortfolio(key?) {
    this.selectitem = key
    return this._portfoliosService.getPortfolioObject(key).subscribe(data => {
      this.itemToBeRemoveTitle = data.title;
      this.itemToBeRemoveThumbnail = data.thumbnail;
      this.itemToBeRemoveLargImage = data.largImage;
      this.toggledialog = 'show';
    });
  }

  public deletePortfolio() {
    const title = this.itemToBeRemoveTitle;
    const thumb = `portfolios/${this.itemToBeRemoveTitle}/thumb/${this.itemToBeRemoveThumbnail.name}`;
    const larg = `portfolios/${this.itemToBeRemoveTitle}/larg/${this.itemToBeRemoveLargImage.name}`;
    return this._portfoliosService.getPortfolioObject(this.selectitem).remove()
      .then(() => this.toggledialog = '')
      .then(() => this._portfoliosService.removeFiles(thumb))
      .then(() => this._portfoliosService.removeFiles(larg))
      .then(data => this._notificationService.notifitem('remove_circle', `${title}`, `Was deleted successfully!`, true))
      .catch(error => this._notificationService.notifitem('error', `Error Removing ${title}`, `Uh-oh, an error occurred! Could not remove ${title}`, true));
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
      .then(() => this.toggledialogSkill = 'hide');
  }

  public goToPortfolio(key) {
    return this._appService.goToPortfolioPage(key);
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
    this.getSkills().unsubscribe();
    this.getPortfolios().unsubscribe();
    this.userDescription().unsubscribe();
    this.openASkill().unsubscribe();
    this.removePortfolio().unsubscribe();
  }

}
