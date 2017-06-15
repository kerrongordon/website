import { Component, OnInit, AfterContentChecked, OnDestroy } from '@angular/core';
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
              NotificationService]
})
export class HomeComponent implements OnInit, AfterContentChecked, OnDestroy {

  private probar2: any;
  private probar1: any;

  public title: String = 'Kerron Gordon';
  public email: any;
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
    private _notificationService: NotificationService
  ) {
    this.complexForm = _formBuilder.group({
      'name': [null, Validators.compose([Validators.required, Validators.minLength(3)])],
      'email': [null, Validators.compose([Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')])],
      'message': [null, Validators.compose([Validators.required, Validators.minLength(20)])]
    });
  }

  ngOnInit(): void {
    this.setDescription();
    this.setSkills();
    this.setPortfolios();
  }

  private setDescription() {
    return this._descriptionService.getDescription()
      .subscribe(data => this.description = data.description);
  }

  private setSkills() {
    return this._skillsService.getListOfSkills()
      .subscribe(data => this.skills = data);
  }

  private setPortfolios() {
    return this._portfoliosService.getListPortfoliosHome()
      .subscribe(data => this.portfolios = data.reverse());
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
          });
    }
    return;
  }

  ngAfterContentChecked() {
    const progressItem = document.querySelectorAll('.progressItem');
    const settozero = document.querySelectorAll('.settozero');
    const skilllevel = document.querySelectorAll('.skill__level');
    const kgprogressbar = document.querySelectorAll('kg-progressbar');

    if (settozero.length === 0 && skilllevel.length === 0) { 
      clearTimeout(this.probar1);
      clearTimeout(this.probar2);
      return;
    }

    this.probar1 = setTimeout( () => {
      for (let index = 0; index < kgprogressbar.length; index++) {
        let element = kgprogressbar[index];
        element.classList.remove('skill__level');
      }
    }, 1500)

    this.probar2 = setTimeout( () => {
      for (let index = 0; index < progressItem.length; index++) {
        let element = progressItem[index];
        element.classList.remove('settozero');
      }
    }, 1500)

  }

  ngOnDestroy(): void {
    this.setDescription().unsubscribe();
    this.setSkills().unsubscribe();
    this.setPortfolios().unsubscribe();
  }

}
