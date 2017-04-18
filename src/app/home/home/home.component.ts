import { Component, OnInit, HostBinding, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../../services/app.service';
import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'kg-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  providers: [DatabaseService, AppService]
})
export class HomeComponent implements OnInit, OnDestroy {

  public title: any;
  public description: any;
  public skills: any;
  public portfolios: any;

  complexForm: FormGroup;

  constructor(private data: DatabaseService, private as: AppService, private fb: FormBuilder) {
    this.complexForm = fb.group({
      'name': [null, Validators.compose([Validators.required, Validators.minLength(3)])],
      'email': [null, Validators.compose([Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')])],
      'message': [null, Validators.compose([Validators.required, Validators.minLength(20)])]
    });
  }

  ngOnInit() {
    this.getTitleAndDescription();
    this.getSkills();
    this.getPortfolios();
  }

  private getTitleAndDescription() {
    return this.data.getNameAndDescription().subscribe(infor => {
      this.description = infor.description;
      this.title = infor.name;
    });
  }

  private getSkills() {
    return this.data.getSkills().subscribe(skills => this.skills = skills);
  }

  private getPortfolios() {
    return this.data.getPortfolios().subscribe(data => {
      this.portfolios = data.slice().reverse().filter((el, index) => index < 4);
    });
  }

  public openPortfolios(): void {
    return this.as.goToPortfoliosPage();
  }

  public openPortfolio(key): void {
    return this.as.goToPortfolioPage(key);
  }

  submitForm(value): void {
    if (!value.name || !value.email || !value.message) { return; }
    if (this.complexForm.status === 'VALID') {
        this.data.postEmail(value).subscribe();
        this.complexForm.reset();
        return;
    }
    return;
  }

  ngOnDestroy() {
    this.getTitleAndDescription().unsubscribe();
    this.getSkills().unsubscribe();
    this.getPortfolios().unsubscribe();
  }

}
