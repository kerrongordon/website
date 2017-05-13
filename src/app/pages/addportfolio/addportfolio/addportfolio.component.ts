import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControlName, FormControl } from '@angular/forms';

import { DatabaseService } from '../../../services/database.service';
import { AuthService } from '../../../services/auth.service';

import { MarkdownService } from '../../../services/markdown.service';
import { ImageService } from '../../../services/image/image.service';

@Component({
  selector: 'kg-addportfolio',
  templateUrl: './addportfolio.component.html',
  styleUrls: ['./addportfolio.component.sass'],
  providers: [DatabaseService, MarkdownService, AuthService, ImageService]
})
export class AddportfolioComponent implements OnInit {


  public fGroup: FormGroup;


  public title: string;
  public info: string;
  public type: string;
  public markdown: string;
  public thumbnailBase64: string;
  public desktopBase64: string;

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
    private at: AuthService,
    private _formBuilder: FormBuilder,
    private _imageService: ImageService
  ) {
    this.fGroup = _formBuilder.group({
      'title': [null, Validators.compose([Validators.required, Validators.minLength(3)])],
      'type': [null, Validators.compose([Validators.required, Validators.minLength(3)])],
      'description': [null, Validators.compose([Validators.required, Validators.minLength(30)])],
      'markdown': [null, Validators.compose([Validators.required, Validators.minLength(30)])]
    });
   }

  ngOnInit() {
    this.db.getPortfolios();
    this.db.loadFirebaseStorage();
    this.at.isAuth().authState.subscribe(data => {
      this.auth = data;
      // this.userName = data.google.displayName;
      // this.photoURL = data.google.photoURL;
      console.log(data);
    });

  }

  updateOutput(mdText: string) {
    this.mdOutput = this.md.convert(mdText);
  }

  onThumbnail(event: EventTarget) {
    const files = this._imageService.FileInputInfor(event);
    this.thumbnailfile = files[0];
    this._imageService.ShowImageFromInput(files, 'thumbnailImg');
  }

  onDesktopImage(event: EventTarget) {
    const files = this._imageService.FileInputInfor(event);
    this.desktopImagefile = files[0];
    this._imageService.ShowImageFromInput(files, 'desktopImg');
  }

  addNewPortfolio(event: any, isValid: Boolean) {
    const thumb = document.getElementById('thumbnailImg');
    const deskImage = document.getElementById('desktopImg');

    this._imageService.ImageToBase64(thumb, 0.05)

    console.log(event, isValid);

    console.log(this._imageService.ImageBase64);

  //   const date = new Date();
  //   const portfolio = {
  //     title: this.title,
  //     info: this.info,
  //     type: this.type,
  //     markdown: this.markdown,
  //     username: this.userName,
  //     userPhoto: this.photoURL,
  //     thumbnailfile: this.thumbnailfile,
  //     desktopImagefile: this.desktopImagefile,
  //     desktopBase64: this.desktopBase64,
  //     thumbnailBase64: this.thumbnailBase64,
  //     timestamp: date.getTime()
  //   };


  //   if (this.title &&
  //       this.info &&
  //       this.type &&
  //       this.markdown &&
  //       this.thumbnailfile &&
  //       this.desktopBase64 &&
  //       this.thumbnailBase64 &&
  //       this.desktopImagefile ) {
  //         this.uploading = 'block';
  //         this.db.addPortfolio(portfolio);
  //       }
  }

}
