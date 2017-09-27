var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Contacts as ContactsClass } from '@ionic-native/contacts';
import { NativeStorage } from '@ionic-native/native-storage';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { Camera as CameraClass } from '@ionic-native/camera';
import { Vibration as Vibrate } from '@ionic-native/vibration';
import { CallNumber } from '@ionic-native/call-number';
import { SMS } from '@ionic-native/sms';
import { EmailComposer } from '@ionic-native/email-composer';
import { AppVersion } from '@ionic-native/app-version';
import { UniqueDeviceID } from '@ionic-native/unique-device-id';
import { Clipboard as ClipboardClass } from '@ionic-native/clipboard';
import { Contacts } from '../classes/contacts';
import { Parser } from '../classes/parser';
import { Token } from '../classes/token';
import { Speech } from '../classes/speech';
import { Camera } from '../classes/camera';
import { Global } from '../classes/global';
import { Alert } from '../classes/alert';
import { Vibration } from '../classes/vibration';
import { Toast } from '../classes/toast';
import { Action } from '../classes/action';
import { Send } from '../classes/send';
import { Clipboard } from '../classes/clipboard';
import { Config } from '../classes/config';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ArigatobuttonComponent } from '../components/arigatobutton/arigatobutton';
import { EditablecardComponent } from '../components/editablecard/editablecard';
import { LivecardComponent } from '../components/livecard/livecard';
import { AvatarComponent } from '../components/avatar/avatar';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
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
            HttpModule,
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
            UniqueDeviceID,
            ClipboardClass,
            Contacts,
            Parser,
            Token,
            Speech,
            Global,
            Alert,
            Vibration,
            Toast,
            Action,
            Send,
            Clipboard,
            Config,
            { provide: ErrorHandler, useClass: IonicErrorHandler }
        ]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map