import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, } from 'angularfire2/firestore'
import * as firebase from 'firebase/app'
import 'firebase/storage'

export interface Project {
  id: string,
  title: string,
  content: string,
  markdown: string,
  url: string,
  image: Images
  timestamp: Timestamp
}

export interface Timestamp {
  timestamp: number,
  month: string,
  weekday: string,
  year: number,
  date: number,
  time: Time
}

export interface Time {
  hours: number,
  minutes: number,
  seconds: number,
  Milliseconds: number
}

export interface Images {
  small: Imagen,
  big: Imagen
}

export interface Imagen {
  base64: string,
  name: string,
  size: number,
  type: string,
  url: any
}

export interface Upload {
  progress: number,
  url: string
}

@Injectable()
export class ProjectService {
  storageRef: firebase.storage.Reference

  public basePath = 'projects'
  private uploadTask: firebase.storage.UploadTask
  public upload

  public projectCollection: AngularFirestoreCollection<Project>
  public projects: Observable<Project[]>

  private homeCollection: AngularFirestoreCollection<Project>
  public homeProjects: Observable<Project[]>

  constructor(public _AngularFirestore: AngularFirestore) {
    this.projectCollection = this._AngularFirestore.collection<Project>('projects')
    this.projects = this.projectCollection.valueChanges()
  }

  public addProject(id: string, data: Project) {
    return this._AngularFirestore
      .collection<Project>('projects')
      .doc(id)
      .set(data)
  }

  public homePage() {
    this.homeCollection = this._AngularFirestore.collection<Project>('projects', ref =>
      ref.orderBy('timestamp.timestamp')
    )
    return this.homeProjects = this.homeCollection.valueChanges()
  }

  public loadFirebaseStorage() {
    return this.storageRef = firebase.storage().ref()
  }

  public pushImage(file, title, type) {

    const metadata = {
      contentType: file.type
    }

    this.uploadTask = this.storageRef.child(`/projects/${title}/${type}/${file.name}/`).put(file, metadata)

    return this.uploadTask.then(snapshot => {
      return this.upload = snapshot.downloadURL
    })

  }

}
