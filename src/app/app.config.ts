import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Register } from './pages/register/register';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import {routes} from './app.routes';


export const appConfig: ApplicationConfig = {
  providers: [provideBrowserGlobalErrorListeners(),
             provideZoneChangeDetection(),
             provideRouter(routes),
             provideHttpClient()
  ]
};
