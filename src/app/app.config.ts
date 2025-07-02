import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideMessaging, getMessaging } from '@angular/fire/messaging';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { routes } from './app.routes';
import { provideRouter } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideFirebaseApp(() =>
      initializeApp({
        apiKey: 'AIzaSyDGe1KfHsm9KwrxTsILen7jSMJ7EP60ck4',
        appId: '1:472756664595:web:7cdea8f77590b29e02c2e6',
        authDomain: 'friendlychat-46816.firebaseapp.com',
        measurementId: 'G-ZJ9MRDTWYH',
        messagingSenderId: '472756664595',
        projectId: 'friendlychat-46816',
        storageBucket: 'friendlychat-46816.firebasestorage.app',
      })
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideMessaging(() => getMessaging()),
    provideStorage(() => getStorage()),
  ],
};
