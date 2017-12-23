import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AngularFireModule } from 'angularfire2'
import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { AngularFireAuthModule } from 'angularfire2/auth'
import { environment } from '../environments/environment'
import { ServiceWorkerModule } from '@angular/service-worker'
import { NotificationModule } from './components/notification/notification.module'
import { AngularFireStorageModule } from 'angularfire2/storage'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NotificationModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
