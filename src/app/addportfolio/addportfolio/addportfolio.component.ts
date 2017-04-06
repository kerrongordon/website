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

  public auth: any;
  public userName: string;
  public photoURL: string;

  public thumbnailfile: any;
  public desktopImagefile: any;

  public uploading = 'none';

  constructor(
    private db: DatabaseService,
    private md: MarkdownService,
    private at: AuthService
  ) { }

  ngOnInit() {
    this.db.getPortfolios();
    this.db.loadFirebaseStorage();
    this.at.isAuth().subscribe(data => {
      this.auth = data;
      this.userName = data.google.displayName;
      this.photoURL = data.google.photoURL;
    });

  }

  updateOutput(mdText: string) {
    this.mdOutput = this.md.convert(mdText);
  }

  onThumbnail(event: EventTarget) {
    const eventObj: MSInputMethodContext = <MSInputMethodContext> event;
    const target: HTMLInputElement = <HTMLInputElement> eventObj.target;
    const files: FileList = target.files;
    this.thumbnailfile = files[0];
  }

  onDesktopImage(event: EventTarget) {
    const eventObj: MSInputMethodContext = <MSInputMethodContext> event;
    const target: HTMLInputElement = <HTMLInputElement> eventObj.target;
    const files: FileList = target.files;
    this.desktopImagefile = files[0];
  }

  addNewPortfolio(event): void {
    event.preventDefault();
    const date = new Date();
    const portfolio = {
      title: this.title,
      info: this.info,
      type: this.type,
      markdown: this.markdown,
      username: this.userName,
      userPhoto: this.photoURL,
      thumbnailfile: this.thumbnailfile,
      desktopImagefile: this.desktopImagefile,
      timestamp: date.getTime()
    };

    if (this.title !== '' ||
        this.info !== '' ||
        this.type !== '' ||
        this.markdown !== '' ||
        this.thumbnailfile !== null ||
        this.desktopImagefile !== null) {
          this.uploading = 'block';
          this.db.addPortfolio(portfolio);
        }
  }

}
