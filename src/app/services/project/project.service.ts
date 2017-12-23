import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { Project } from '../../interface/Project'
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, } from 'angularfire2/firestore'
import * as firebase from 'firebase/app'
import 'firebase/storage'

import { AngularFireStorage } from 'angularfire2/storage'

@Injectable()
export class ProjectService {

  private storageRef: firebase.storage.Reference
  private uploadTask: firebase.storage.UploadTask
  public upload: string
  private projectCollection: AngularFirestoreCollection<Project>
  private projects: Observable<Project[]>
  private doc: AngularFirestoreDocument<Project>
  private projectOb: Observable<Project>

  // smallUploadPercent: Observable<number>
  // smallDownloadURL: Observable<string>
  // bigUploadPercent: Observable<number>
  // bigDownloadURL: Observable<string>

  constructor(
    private _afs: AngularFirestore,
    private _afsage: AngularFireStorage
  ) { }

  public loadListOfProjects() {
    this.projectCollection = this._afs
      .collection<Project>('projects', ref => ref.orderBy('timestamp.timestamp'))
    return this.projects = this.projectCollection.valueChanges()
  }

  public loadFirebaseStorage() {
    return this.storageRef = firebase.storage().ref()
  }

  public addProject(id: string, data: Project) {
    return this._afs
      .collection<Project>('projects')
      .doc(id)
      .set(data)
  }

  public getProjectById(id: string) {
    this.doc = this._afs.doc<Project>('projects/' + id)
    return this.projectOb = this.doc.valueChanges()
  }

  public pushImage(file, title, type) {
    const metadata = { contentType: file.type}

    this.uploadTask = this.storageRef.child(`/projects/${title}/${type}/${file.name}/`).put(file, metadata)
    return this.uploadTask.then(snapshot => {
      return this.upload = snapshot.downloadURL
    })

  }


  // uploadFile(file: File, title: string, type: string) {
  //   const metadata = { contentType: file.type }
  //   const filePath = `/projects/${title}/${type}/${file.name}/`
  //   const task = this._afsage.upload(filePath, file, metadata)

  //   if (type === 'small') {
  //     this.smallUploadPercent = task.percentageChanges()
  //     return this.smallDownloadURL = task.downloadURL()
  //   }

  //   if (type === 'big') {
  //     this.bigUploadPercent = task.percentageChanges()
  //     return this.bigDownloadURL = task.downloadURL()
  //   }

  // }

}
