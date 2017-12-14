import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { Project } from '../../interface/Project'
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, } from 'angularfire2/firestore'
import * as firebase from 'firebase/app'
import 'firebase/storage'

@Injectable()
export class ProjectService {

  private storageRef: firebase.storage.Reference
  private uploadTask: firebase.storage.UploadTask
  public upload: string
  private projectCollection: AngularFirestoreCollection<Project>
  private projects: Observable<Project[]>
  private doc: AngularFirestoreDocument<Project>
  private projectOb: Observable<Project>

  constructor(private _afs: AngularFirestore) { }

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

}
