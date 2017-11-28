import { Component, OnInit, ViewChild, ElementRef } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { ProjectService, Project } from '../../services/project/project.service'
import { TimestampService } from '../../services/timestamp/timestamp.service'
import { MarkdownService } from '../../services/markdown/markdown.service'
import { FileInput, ShowImageInHTML, ImageToBase64Small } from '../../exports/fileimage'

@Component({
  selector: 'kgp-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.sass'],
  providers: [ProjectService, TimestampService, MarkdownService]
})
export class AddProjectComponent implements OnInit {
  private bimg
  private simg

  public AddProjectForm: FormGroup
  public markdown: string

  public ImageBase64

  @ViewChild('smailImage') smailImage: ElementRef
  @ViewChild('bigImage') bigImage: ElementRef

  private smallImageLoad: FileList
  private bigImageLoad: FileList

  private smailImageToFirebase
  private bigImageToFirebase

  constructor(
    public _ProjectService: ProjectService,
    private _TimestampService: TimestampService,
    private _MarkdownService: MarkdownService
  ) { }

  ngOnInit() {
    this.forminit()
    this._ProjectService.loadFirebaseStorage()
  }

  private forminit() {
    return this.AddProjectForm = new FormGroup({
      projectTitle: new FormControl('', {
        validators: Validators.compose([Validators.required, Validators.minLength(3)]),
        updateOn: 'change'
      }),
      projectUrl: new FormControl('', {
        validators: Validators.compose([Validators.required, Validators.minLength(5)]),
        updateOn: 'change'
      }),
      projectMarkdown: new FormControl('', {
        validators: Validators.compose([Validators.required, Validators.minLength(5)]),
        updateOn: 'change'
      }),
    })
  }

  public smailImg(event) {
    this.smallImageLoad = FileInput(event)
    const { projectTitle } = this.AddProjectForm.value
    this.smailImageToFirebase = event.target.files[0]
    return ShowImageInHTML(this.smallImageLoad, 'thum')
  }

  public bigImg(event) {
    this.bigImageLoad = FileInput(event)
    const { projectTitle } = this.AddProjectForm.value
    this.bigImageToFirebase = event.target.files[0]
    return ShowImageInHTML(this.bigImageLoad, 'bigthun')
  }

  private resetEmailForm() {
    this.markdown = ''
    this.smailImage.nativeElement.removeAttribute('src')
    this.smailImage.nativeElement.removeAttribute('alt')
    this.bigImage.nativeElement.removeAttribute('src')
    this.bigImage.nativeElement.removeAttribute('alt')
    return this.AddProjectForm.reset()
  }

  public textToMarkDown(text) {
    return this.markdown = this._MarkdownService.convert(text)
  }

  public onSubmit() {
    if (!this.AddProjectForm.valid) { return }
    if (!this.smailImageToFirebase) { return }
    if (!this.bigImageToFirebase) { return }

    const { projectTitle, projectMarkdown, projectUrl } = this.AddProjectForm.value
    const getId = this._TimestampService.getTheId()

    const smi = this.smailImage.nativeElement
    const bmi = this.bigImage.nativeElement

    const thumbnailBase64 = ImageToBase64Small(smi)
    const desktopBase64 = ImageToBase64Small(bmi)

    this.simg = this._ProjectService.pushImage(this.smailImageToFirebase, projectTitle, 'small')
    this.bimg = this._ProjectService.pushImage(this.bigImageToFirebase, projectTitle, 'big')


    Promise.all([
      this.simg,
      this.bimg
    ]).then(e => {

      const projectPush: Project = {
        id: getId,
        title: projectTitle,
        content: projectMarkdown,
        markdown: this.markdown,
        url: projectUrl,
        image: {
          small: {
            base64: thumbnailBase64,
            name: this.smallImageLoad[0].name,
            size: this.smallImageLoad[0].size,
            type: this.smallImageLoad[0].type,
            url: this.simg.__zone_symbol__value
          },
          big: {
            base64: desktopBase64,
            name: this.bigImageLoad[0].name,
            size: this.bigImageLoad[0].size,
            type: this.bigImageLoad[0].type,
            url: this.bimg.__zone_symbol__value
          }
        },
        timestamp: {
          timestamp: this._TimestampService.getTimestamp(),
          month: this._TimestampService.getTheMonth(),
          weekday: this._TimestampService.getTheWeekday(),
          year: this._TimestampService.getTheYear(),
          date: this._TimestampService.getTheDateNum(),
          time: this._TimestampService.getTheTime()
        },
      }

      this._ProjectService.addProject(getId, projectPush)
      console.log(projectPush)
    }).then(e => {
      this.resetEmailForm()
    })
    .catch(error => {
      console.log('error ', error)
    })

  }

}
