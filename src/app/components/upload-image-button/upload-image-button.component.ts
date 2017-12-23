import { Component, Input, ViewChild, ElementRef, OnDestroy, EventEmitter, Output } from '@angular/core'
import { FileInput, ShowImageInHTML, ImageToBase64Small } from '../../exports/fileimage'
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage'
import { Subscription } from 'rxjs/Subscription'
import { Imagen } from '../../interface/Project'


@Component({
  selector: 'kgp-upload-image-button',
  templateUrl: './upload-image-button.component.html',
  styleUrls: ['./upload-image-button.component.sass']
})
export class UploadImageButtonComponent implements OnDestroy {

  private file: File
  private task: AngularFireUploadTask
  private uploadPercentSub: Subscription

  pauseUp = false
  uploading = false
  uploadPercent: number

  @Input() type: string
  @Input() path: string
  @ViewChild('imageSrc') imageSrc: ElementRef
  @Output() downloadURLOut = new EventEmitter

  constructor(
    private _afsage: AngularFireStorage
  ) { }

  addfile(e) {
    if (!e) { return }
    FileInput(e).then( (data: FileList) => {
      this.file = data[0]
      ShowImageInHTML(data, this.type)
    })
  }

  onload() {
    const imageId = this.imageSrc.nativeElement
    ImageToBase64Small(imageId).then((img) => this.uploadFile(img))
  }

  uploadFile(base64) {
    this.uploading = true
    const metadata = { contentType: this.file.type }
    const filePath = `/projects/${this.path}/${this.type}/${this.file.name}/`
    this.task = this._afsage.upload(filePath, this.file, metadata)

    this.uploadPercentSub = this.task.percentageChanges()
      .subscribe(data => {
        this.uploadPercent = data
        if (data === 100) { this.uploading = false }
      })

    return this.task.then().then(a => {
      const image: Imagen = {
        base64: base64,
        name: this.file.name,
        size: this.file.size,
        type: this.file.type,
        url: a.downloadURL
      }
      this.downloadURLOut.emit(image)
    })

  }

  resumeUpload() {
    this.task.resume()
    return this.pauseUp = false
  }

  pauseUpload() {
    this.task.pause()
    return this.pauseUp = true
  }

  cancelUpload() {
    return this.task.cancel()
  }

  ngOnDestroy() {
    if (!this.uploadPercentSub) { return }
    this.uploadPercentSub.unsubscribe()
  }

}
