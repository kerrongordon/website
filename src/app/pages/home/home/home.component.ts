import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AppService } from '../../../services/app.service';
import { DescriptionService } from '../../../services/firebase/description/description.service';
import { SkillsService } from '../../../services/firebase/skills/skills.service';
import { PortfoliosService } from '../../../services/firebase/portfolios/portfolios.service';
import { TitleService } from '../../../services/firebase/title/title.service';
import { EmailService } from '../../../services/email/email.service';

@Component({
  selector: 'kg-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  providers: [AppService,
              DescriptionService,
              SkillsService,
              PortfoliosService,
              TitleService,
              EmailService]
})
export class HomeComponent implements OnInit, OnDestroy {

  public title: string;
  public email: any;
  public description: string;
  public skills: any;
  public portfolios: any;

  public complexForm: FormGroup;

  constructor(
    private _appService: AppService,
    private _formBuilder: FormBuilder,
    private _descriptionService: DescriptionService,
    private _skillsService: SkillsService,
    private _portfoliosService: PortfoliosService,
    private _titleService: TitleService,
    private _emailService: EmailService
  ) {
    this.complexForm = _formBuilder.group({
      'name': [null, Validators.compose([Validators.required, Validators.minLength(3)])],
      'email': [null, Validators.compose([Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')])],
      'message': [null, Validators.compose([Validators.required, Validators.minLength(20)])]
    });
  }

  ngOnInit() {
    this.setTitle();
    this.setDescription();
    this.setSkills();
    this.setPortfolios();
  }

  private setTitle() {
    return this._titleService.getTitle().subscribe(data => this.title = data.$value);
  }

  private setDescription() {
    return this._descriptionService.getDescription().subscribe(data => this.description = data.$value);
  }

  private setSkills() {
    return this._skillsService.getListOfSkills().subscribe(data => this.skills = data);
  }

  private setPortfolios() {
    return this._portfoliosService.getListPortfolios()
      .subscribe(data => this.portfolios = data.slice().reverse().filter((el, index) => index < 4) );
  }

  public openPortfolios() {
    return this._appService.goToPortfoliosPage();
  }

  public openPortfolio(key) {
    return this._appService.goToPortfolioPage(key);
  }

  submitForm(value) {
    if (!value.name || !value.email || !value.message) { return; }
    if (this.complexForm.status === 'VALID') {
        return this.email = this._emailService.postEmail(value)
          .subscribe(() => this.complexForm.reset());
    }
    return;
  }

  ngOnDestroy() {
    this.setTitle().unsubscribe();
    this.setDescription().unsubscribe();
    this.setSkills().unsubscribe();
    this.setPortfolios().unsubscribe();
  }

}
