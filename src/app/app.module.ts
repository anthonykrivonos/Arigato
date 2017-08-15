import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';

import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Contacts as ContactsClass, Contact, ContactField, ContactName, ContactOrganization } from '@ionic-native/contacts';
import { NativeStorage } from '@ionic-native/native-storage';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { Camera as CameraClass, CameraOptions } from '@ionic-native/camera';
import { Vibration as Vibrate} from '@ionic-native/vibration';
import { CallNumber } from '@ionic-native/call-number';
import { SMS } from '@ionic-native/sms';
import { EmailComposer } from '@ionic-native/email-composer';
import { AppVersion } from '@ionic-native/app-version';

import { Contacts } from '../classes/contacts';
import { Parser } from '../classes/parser';
import { Speech } from '../classes/speech';
import { Camera } from '../classes/camera';
import { Global } from '../classes/global';
import { Alert } from '../classes/alert';
import { Vibration } from '../classes/vibration';
import { Toast } from '../classes/toast';
import { Action } from '../classes/action';
import { Send } from '../classes/send';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { ArigatobuttonComponent } from '../components/arigatobutton/arigatobutton';
import { EditablecardComponent } from '../components/editablecard/editablecard';
import { LivecardComponent } from '../components/livecard/livecard';
import { AvatarComponent } from '../components/avatar/avatar';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ArigatobuttonComponent,
    EditablecardComponent,
    LivecardComponent,
    AvatarComponent
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
    Vibrate,
    CallNumber,
    SMS,
    EmailComposer,
    AppVersion,
    Contacts,
    Parser,
    Speech,
    Global,
    Alert,
    Vibration,
    Toast,
    Action,
    Send,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
