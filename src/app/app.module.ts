import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { Firebaseconfig } from './config/class/firebaseconfig';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotificationModule } from './components/notification/notification.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    NotificationModule,
    AngularFireModule.initializeApp(Firebaseconfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
