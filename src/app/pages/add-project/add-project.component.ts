import { Component, OnInit, ViewChild, ElementRef } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { ProjectService } from '../../services/project/project.service'
import { TimestampService } from '../../services/timestamp/timestamp.service'
import { MarkdownService } from '../../services/markdown/markdown.service'
import { Project } from '../../interface/Project'

@Component({
  selector: 'kgp-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.sass'],
  providers: [ProjectService, TimestampService, MarkdownService]
})
export class AddProjectComponent implements OnInit {

  public AddProjectForm: FormGroup
  public markdown: string

  public htmlView = false

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

  toggleView() {
    return this.htmlView = !this.htmlView
  }

  geturl(e) {
    console.log('output Url ', e)
  }

  public resetEmailForm() {
    this.markdown = ''
    return this.AddProjectForm.reset()
  }

  public textToMarkDown(text) {
    return this.markdown = this._MarkdownService.convert(text)
  }

  // public onSubmit() {
  //   if (!this.AddProjectForm.valid) { return }

  //   const { projectTitle, projectMarkdown, projectUrl } = this.AddProjectForm.value
  //   const getId = this._TimestampService.getTheId()



  //   Promise.all([

  //   ]).then(e => {

  //     const projectPush: Project = {
  //       id: getId,
  //       title: projectTitle,
  //       content: projectMarkdown,
  //       markdown: this.markdown,
  //       url: projectUrl,
  //       image: {
  //         small: {
  //           base64: thumbnailBase64,
  //           name: this.smallImageLoad[0].name,
  //           size: this.smallImageLoad[0].size,
  //           type: this.smallImageLoad[0].type,
  //           url: this.simg.__zone_symbol__value
  //         },
  //         big: {
  //           base64: desktopBase64,
  //           name: this.bigImageLoad[0].name,
  //           size: this.bigImageLoad[0].size,
  //           type: this.bigImageLoad[0].type,
  //           url: this.bimg.__zone_symbol__value
  //         }
  //       },
  //       timestamp: {
  //         timestamp: this._TimestampService.getTimestamp(),
  //         month: this._TimestampService.getTheMonth(),
  //         weekday: this._TimestampService.getTheWeekday(),
  //         year: this._TimestampService.getTheYear(),
  //         date: this._TimestampService.getTheDateNum(),
  //         time: this._TimestampService.getTheTime()
  //       },
  //     }

  //     this._ProjectService.addProject(getId, projectPush)
  //     console.log(projectPush)
  //   }).then(e => {
  //     this.resetEmailForm()
  //   })
  //   .catch(error => {
  //     console.log('error ', error)
  //   })

  // }

}
