import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { Firebaseconfig } from './config/class/firebaseconfig';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotificationModule } from './components/notification/notification.module';
import { FooterModule } from './components/footer/footer.module';
import { RibbanModule } from './components/ribban/ribban.module';
import { TitleModule } from './components/title/title.module';
import { HeaderbarModule } from './components/headerbar/headerbar.module';
import { BtnModule } from './components/btn/btn.module';
import { MenubarModule } from './components/menubar/menubar.module';
import { DialogModule } from './components/dialog/dialog.module';
import { SearchModule } from './components/search/search.module';
import { CardImageModule } from './components/card/card-image.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NotificationModule,
    AngularFireModule.initializeApp(Firebaseconfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HeaderbarModule,
    RibbanModule,
    TitleModule,
    BtnModule,
    MenubarModule,
    DialogModule,
    CardImageModule,
    SearchModule,
    FooterModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
