import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AppService } from '../../../services/app.service';
import { DescriptionService } from '../../../services/firebase/description/description.service';
import { SkillsService } from '../../../services/firebase/skills/skills.service';
import { PortfoliosService } from '../../../services/firebase/portfolios/portfolios.service';
import { TitleService } from '../../../services/firebase/title/title.service';
import { EmailService } from '../../../services/email/email.service';
import { NotificationService } from '../../../services/notification/notification.service';
import { Portfolio } from '../../../config/interface/portfolio';
import { Skill } from '../../../config/interface/skill';
import { Subscription } from "rxjs/Subscription";
import { LocalforageService } from '../../../services/localforage.service';

@Component({
  selector: 'kg-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  providers: [AppService,
              DescriptionService,
              SkillsService,
              PortfoliosService,
              TitleService,
              EmailService,
              NotificationService,
              LocalforageService]
})
export class HomeComponent implements OnInit, OnDestroy {

  public title: String = 'Kerron Gordon';
  public email: Subscription;
  public description: String;
  public skills: Skill[];
  public portfolios: Portfolio[];

  public complexForm: FormGroup;

  constructor(
    private _appService: AppService,
    private _formBuilder: FormBuilder,
    private _descriptionService: DescriptionService,
    private _skillsService: SkillsService,
    private _portfoliosService: PortfoliosService,
    private _titleService: TitleService,
    private _emailService: EmailService,
    private _notificationService: NotificationService,
    private _localforageService: LocalforageService
  ) {
    this.complexForm = _formBuilder.group({
      'name': [null, Validators.compose([Validators.required, Validators.minLength(3)])],
      'email': [null, Validators.compose([Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')])],
      'message': [null, Validators.compose([Validators.required, Validators.minLength(20)])]
    });
  }

  ngOnInit(): void {
    // this.setTitle();
    this.setDescription();
    this.setSkills();
    this.setPortfolios();
  }

  private setTitle() {
    return this._titleService.getTitle()
      .subscribe(data => this.title = data.title) as Subscription;
  }

  private setDescription() {
    return this._descriptionService.getDescription()
      .subscribe(data => {
        this.description = data.description;
        this._localforageService.localforageSave('description', data.description);
        this._localforageService.localforageGet('description');
      }) as Subscription;
  }

  private setSkills() {
    return this._skillsService.getListOfSkills()
      .subscribe(data => {
        this.skills = data;
        this._localforageService.localforageSave('skills', data);
        this._localforageService.localforageGet('skills');
      }) as Subscription;
  }

  private setPortfolios() {
    return this._portfoliosService.getListPortfolios()
      .subscribe(data => {
        this.portfolios = data.reverse().slice(0,4);
        this._localforageService.localforageSave('portfolios', data);
        this._localforageService.localforageGet('portfolios');
      }) as Subscription;
  }

  public openPortfolios() {
    return this._appService.goToPortfoliosPage() as Promise<boolean>;
  }

  public openPortfolio(key) {
    return this._appService.goToPortfolioPage(key) as Promise<boolean>;
  }

  public submitForm(value) {
    if (!value.name || !value.email || !value.message) { return; }
    if (this.complexForm.status === 'VALID') {
        return this.email = this._emailService.postEmail(value)
          .subscribe(data => {
            const string = value.message;
            const length = 60;
            const trimmedString = string.substring(0, length);
            this._notificationService.notifitem('email', `${value.name} Your Email Was Sent`, trimmedString, true);
            this.complexForm.reset()
          }) as Subscription;
    }
    return;
  }

  ngOnDestroy(): void {
    this.setTitle().unsubscribe();
    this.setDescription().unsubscribe();
    this.setSkills().unsubscribe();
    this.setPortfolios().unsubscribe();
  }

}
