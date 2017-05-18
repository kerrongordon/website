import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControlName, FormControl } from '@angular/forms';

import { MarkdownService } from '../../../services/markdown.service';
import { ImageService } from '../../../services/image/image.service';
import { AddPortfolioService } from '../../../services/firebase/addportfolio/add-portfolio.service';

@Component({
  selector: 'kg-addportfolio',
  templateUrl: './addportfolio.component.html',
  styleUrls: ['./addportfolio.component.sass'],
  providers: [MarkdownService, ImageService, AddPortfolioService]
})
export class AddportfolioComponent implements OnInit {

  public fGroup: FormGroup;
  public title: string;
  public type: string;
  public markdown: string;

  public thumbnailBase64: string;
  public desktopBase64: string;

  public mdOutput: string;

  public thumbnailfile: any;
  public desktopImagefile: any;

  public uploading = 'none';

  constructor(
    private _markdownService: MarkdownService,
    private _formBuilder: FormBuilder,
    private _imageService: ImageService,
    private _addPortfolioService: AddPortfolioService
  ) {
    this.fGroup = _formBuilder.group({
      'title': [null, Validators.compose([Validators.required, Validators.minLength(3)])],
      'type': [null, Validators.compose([Validators.required, Validators.minLength(3)])],
      'description': [null, Validators.compose([Validators.required, Validators.minLength(30)])],
      'markdown': [null, Validators.compose([Validators.required, Validators.minLength(30)])]
    });
   }

  ngOnInit() {
    this._addPortfolioService.ListPortfoliosItems();
  }

  updateOutput(mdText: string) {
    return this.mdOutput = this._markdownService.convert(mdText);
  }

  onThumbnail(event: EventTarget) {
    const files = this._imageService.FileInputInfor(event);
    this._imageService.ShowImageFromInput(files, 'thumbnailImg');
    return this.thumbnailfile = files[0];
  }

  onDesktopImage(event: EventTarget) {
    const files = this._imageService.FileInputInfor(event);
    this._imageService.ShowImageFromInput(files, 'desktopImg');
    return this.desktopImagefile = files[0];
  }

  addNewPortfolio(event: any, isValid: Boolean) {
    if (!isValid) { return };
    if (this.thumbnailfile === undefined) { return };
    if (this.desktopImagefile === undefined) { return };

    const date = new Date();
    const thumb = document.getElementById('thumbnailImg');
    const deskImage = document.getElementById('desktopImg');

    this.thumbnailBase64 =  this._imageService.ImageToBase64(thumb, 0.05);
    this.desktopBase64 = this._imageService.ImageToBase64(deskImage, 0.05);

    const portfolio = {
      title: event.title,
      type: event.type,
      description: event.description,
      markdown: event.markdown,
      thumbnail: {
        image: this.thumbnailfile,
        base64: this.thumbnailBase64
      },
      largImage: {
        image: this.desktopImagefile,
        base64: this.desktopBase64
      },
      timestamp: date.getTime()
    };

    Promise.all([
      this.thumbnailBase64,
      this.desktopBase64,
    ]).then(e => {
      this.uploading = 'block';
      this._addPortfolioService.addPortfolio(portfolio);
    }).catch(error => console.log(error));

  }

}
