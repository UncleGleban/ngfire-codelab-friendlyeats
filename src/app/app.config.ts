import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth, connectAuthEmulator } from '@angular/fire/auth';
import {
  provideFirestore,
  getFirestore,
  connectFirestoreEmulator,
} from '@angular/fire/firestore';
import {
  provideFunctions,
  getFunctions,
  connectFunctionsEmulator,
} from '@angular/fire/functions';
import { provideMessaging, getMessaging } from '@angular/fire/messaging';
import {
  provideStorage,
  getStorage,
  connectStorageEmulator,
} from '@angular/fire/storage';
import { routes } from './app.routes';
import { provideRouter } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'friendlychat-46816',
        appId: '1:472756664595:web:7cdea8f77590b29e02c2e6',
        storageBucket: 'friendlychat-46816.firebasestorage.app',
        apiKey: 'AIzaSyDGe1KfHsm9KwrxTsILen7jSMJ7EP60ck4',
        authDomain: 'friendlychat-46816.firebaseapp.com',
        messagingSenderId: '472756664595',
        measurementId: 'G-ZJ9MRDTWYH',
      })
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideMessaging(() => getMessaging()),
    provideStorage(() => getStorage()),
  ],
};
