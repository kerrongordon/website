import { Component, OnInit, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AppService } from '../../../services/app.service';
import { DescriptionService } from '../../../services/firebase/description/description.service';
import { SkillsService } from '../../../services/firebase/skills/skills.service';
import { PortfoliosService } from '../../../services/firebase/portfolios/portfolios.service';
import { EmailService } from '../../../services/email/email.service';
import { NotificationService } from '../../../services/notification/notification.service';
import { Portfolio } from '../../../config/interface/portfolio';
import { Skill } from '../../../config/interface/skill';
import { Title } from '@angular/platform-browser';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Description } from '../../../config/interface/description';

@Component({
  selector: 'kg-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  providers: [AppService,
              DescriptionService,
              SkillsService,
              PortfoliosService,
              EmailService,
              NotificationService]
})
export class HomeComponent implements OnInit {
  
  public showImage: boolean = false;
  public inputClass = '';
  public title: String = 'Kerron Gordon';
  public email: any;
  public skills: FirebaseListObservable<Skill[]>;
  public portfolios: FirebaseListObservable<Portfolio[]>;
  public description: FirebaseObjectObservable<Description>;
  public complexForm: FormGroup;

  public inputClass1: string = '';
  public inputClass2: string = '';
  public inputClass3: string = '';

  @HostListener('window:resize', ['$event'])
    dragover(event) {
      this.getWindowWidth(event)
    }

  constructor(
    private _title: Title,
    private _appService: AppService,
    private _formBuilder: FormBuilder,
    private _descriptionService: DescriptionService,
    private _skillsService: SkillsService,
    private _portfoliosService: PortfoliosService,
    private _emailService: EmailService,
    private _notificationService: NotificationService
  ) {
    this.complexForm = _formBuilder.group({
      'name': [null, Validators.compose([Validators.required, Validators.minLength(3)])],
      'email': [null, Validators.compose([Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')])],
      'message': [null, Validators.compose([Validators.required, Validators.minLength(20)])]
    });
  }

  ngOnInit() {
    this.setDescription();
    this.setSkills();
    this.setPortfolios();
    this._title.setTitle('Kerron Gordon');
    this.initWidth();
  }

  private setDescription() {
    return this.description = this._descriptionService.getDescription()
  }

  private setSkills() {
    return this.skills = this._skillsService.getListOfSkills()
  }

  private setPortfolios() {
    return this.portfolios = this._portfoliosService.getTheLastFour()
  }

  public openPortfolios() {
    return this._appService.goToPortfoliosPage() as Promise<boolean>
  }

  public openPortfolio(key) {
    return this._appService.goToPortfolioPage(key) as Promise<boolean>
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

  private getWindowWidth(e) {
    if (e.target.innerWidth >= 559) {
      this.showImage = true
    } else {
      this.showImage = false
    }
  }

  private initWidth() {
    if (window.innerWidth >= 559) {
      this.showImage = true
    } else {
      this.showImage = false
    }
  }

}
