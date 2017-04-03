import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../services/database.service';
import { AuthService } from '../../services/auth.service';

import { MarkdownService } from '../../services/markdown.service';
import { fallIn } from '../../router.animations';

@Component({
  selector: 'kg-addportfolio',
  templateUrl: './addportfolio.component.html',
  styleUrls: ['./addportfolio.component.sass'],
  providers: [DatabaseService, MarkdownService, AuthService],
  animations: [fallIn()]
})
export class AddportfolioComponent implements OnInit {

  public title: string;
  public info: string;
  public type: string;
  public markdown: string;

  public mdOutput: string;

  public dateMade: string;
  public auth: any;
  public userName: string;
  public photoURL: string;

  constructor(
    private db: DatabaseService,
    private md: MarkdownService,
    private at: AuthService
  ) { }

  ngOnInit() {
    this.db.getPortfolios();
    this.db.loadFirebaseStorage();
    this.at.amIauth().subscribe(data => {
      this.auth = data;
      this.userName = data.google.displayName;
      this.photoURL = data.google.photoURL;
    });
    console.log(this);
  }

  updateOutput(mdText: string) {
    this.mdOutput = this.md.convert(mdText);
  }


  addNewPortfolio(event) {
    event.preventDefault();
    const date = new Date();
    const portfolio = {
      title: this.title,
      info: this.info,
      type: this.type,
      markdown: this.markdown,
      username: this.userName,
      userPhoto: this.photoURL,
      timestamp: date.getTime()
    };

    this.db.addPortfolio(portfolio);
  }

}
