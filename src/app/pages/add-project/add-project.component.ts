import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { ProjectService, Project } from '../../services/project/project.service'
import { TimestampService } from '../../services/timestamp/timestamp.service'
import { MarkdownService } from '../../services/markdown/markdown.service'

@Component({
  selector: 'kgp-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.sass'],
  providers: [ProjectService, TimestampService, MarkdownService]
})
export class AddProjectComponent implements OnInit {

  public AddProjectForm: FormGroup
  public markdown: string

  constructor(
    private _ProjectService: ProjectService,
    private _TimestampService: TimestampService,
    private _MarkdownService: MarkdownService
  ) { }

  ngOnInit() {
    this.forminit()
  }

  private forminit() {
    return this.AddProjectForm = new FormGroup({
      projectTitle: new FormControl('', {
        validators: Validators.compose([Validators.required, Validators.minLength(3)]),
        updateOn: 'change'
      }),
      projectMarkdown: new FormControl('', {
        validators: Validators.compose([Validators.required, Validators.minLength(5)]),
        updateOn: 'change'
      }),
    })
  }

  private resetEmailForm() {
    return this.AddProjectForm.reset()
  }

  public textToMarkDown(text) {
    return this.markdown = this._MarkdownService.convert(text)
  }

  public onSubmit() {
    if (!this.AddProjectForm.valid) { return }

    const { projectTitle, projectMarkdown } = this.AddProjectForm.value
    const getId = this._TimestampService.getTheId()

    const projectPush: Project = {
      id: getId,
      title: projectTitle,
      markdown: projectMarkdown,
      timestamp: {
        timestamp: this._TimestampService.getTimestamp(),
        month: this._TimestampService.getTheMonth(),
        weekday: this._TimestampService.getTheWeekday(),
        year: this._TimestampService.getTheYear(),
        date: this._TimestampService.getTheDateNum(),
        time: this._TimestampService.getTheTime()
      },
    }

    return this._ProjectService.addProject(getId, projectPush)
      .then(() => console.log(projectPush) )
      .then(() => this.resetEmailForm())
  }

}
