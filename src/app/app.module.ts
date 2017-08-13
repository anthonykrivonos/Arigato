import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';

import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Contacts as ContactsClass, Contact, ContactField, ContactName } from '@ionic-native/contacts';
import { NativeStorage } from '@ionic-native/native-storage';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { Camera as CameraClass, CameraOptions } from '@ionic-native/camera';

import { Contacts } from '../classes/contacts';
import { Parser } from '../classes/parser';
import { Speech } from '../classes/speech';
import { Camera } from '../classes/camera';
import { Global } from '../classes/global';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { ArigatobuttonComponent } from '../components/arigatobutton/arigatobutton';
import { EditablecardComponent } from '../components/editablecard/editablecard';
import { LivecardComponent } from '../components/livecard/livecard';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ArigatobuttonComponent,
    EditablecardComponent,
    LivecardComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ContactsClass,
    NativeStorage,
    SpeechRecognition,
    CameraClass,
    Camera,
    Contacts,
    Parser,
    Speech,
    Global,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
