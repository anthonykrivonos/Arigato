import { Injectable } from '@angular/core';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { Platform } from 'ionic-angular';

@Injectable()
export class Speech {
      constructor(private speechRecognition: SpeechRecognition, public platform:Platform) {}

      isAvailable(success:any = null, failure:any = null):void {
            this.speechRecognition.isRecognitionAvailable().then(()=>{
                  console.log("speech.ts: Speech recognition available.");
                  if (success) success();
            }).catch(()=>{
                  console.log("speech.ts: Speech recognition not available.");
                  if (failure) failure();
            });
      }

      requestPermission(success:any = null, failure:any = null):void {
            this.speechRecognition.requestPermission().then(()=>{
                  console.log("speech.ts: Speech recognition granted.");
                  if (success) success();
            }).catch(()=>{
                  console.log("speech.ts: Speech recognition denied.");
                  if (failure) failure();
            });
      }

      hasPermission(success:any = null, failure:any = null):void {
            this.speechRecognition.hasPermission().then(()=>{
                  console.log("speech.ts: Speech recognition allowed.");
                  if (success) success();
            }).catch(()=>{
                  console.log("speech.ts: Speech recognition not allowed.");
                  if (failure) failure();
            });
      }

      listen(success:any, failure:any = null):void {
            this.hasPermission(() => {
                  var androidOptions = {
                        prompt: 'Speak into your phone!'
                  }
                  var iosOptions = {
                        language: 'en-US',
                        prompt: 'Speak into your phone!'
                  }
                  this.speechRecognition.startListening(this.platform.is('ios') ? iosOptions : androidOptions).subscribe((text) => {
                        text[0] == null ? (failure ? failure("Could not get first index.") : null) : success(text[0]);
                  }, (error) => {
                        if (failure) {failure(error)}
                  });
            });
      }

      stopListening(success:any = null, failure:any = null):void {
            this.speechRecognition.stopListening().then(()=>{
                  console.log("speech.ts: Speech recognition allowed.");
                  if (success) success();
            }).catch((e)=>{
                  console.log("speech.ts: Speech recognition not allowed.");
                  if (failure) failure(e);
            });
      }
}
