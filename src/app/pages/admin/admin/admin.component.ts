import { Component, OnInit, OnDestroy } from '@angular/core';
import { DatabaseService } from '../../../services/database.service';
import { AuthService } from '../../../services/auth.service';
import { AppService } from '../../../services/app.service';

@Component({
  selector: 'kg-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass'],
  providers: [DatabaseService, AuthService, AppService]
})
export class AdminComponent implements OnInit, OnDestroy {

  infor: any;
  public auth: any;
  public portfolios: any;
  public description: any;
  public skills: any;
  public itemToBeRemoveTitle: string;

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
    private db: DatabaseService,
    private user: AuthService,
    private app: AppService
  ) { }

  ngOnInit() {
    this.userInfor();
    this.getSkills();
    this.getPortfolios();
    this.userDescription();
  }

  public userInfor() {
    return this.user.isAuth().authState.subscribe(data => this.auth = data);
  }

  public getPortfolios() {
    return this.db.getPortfolios().subscribe(data => this.portfolios = data);
  }

  public getSkills() {
    return this.db.getSkills().subscribe(data => this.skills = data);
  }

  public openASkill(key?) {
    this.skillId = key;
    return this.db.getSkill(key).subscribe(data => {
      this.getskillId = data;
      this.newSkillTitle = data.title;
      this.newSkillLevel = data.level;
      this.toggledialogSkill = 'show';
    });
  }

  public removePortfolio(key?) {
    this.selectitem = key
    return this.db.getPortfolioDetails(key).subscribe(data => {
      this.itemToBeRemoveTitle = data.title;
      this.toggledialog = 'show';
    });
  }

  public deletePortfolio() {
    return this.db.getPortfolioDetails(this.selectitem).remove()
      .then(() => this.toggledialog = '')
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
    return this.db.getSkill(this.skillId).update(skill)
      .then(() => this.toggledialogSkill = 'hide');
  }

  public goToPortfolio(key) {
    return this.app.goToPortfolioPage(key);
  }

  public userDescription() {
    return this.db.getNameAndDescription().subscribe(data => this.description = data);
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
    return this.db.getNameAndDescription().update(description);
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
