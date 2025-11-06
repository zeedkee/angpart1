import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './header/header';
import { Login } from './login/login';
import { Contact } from './contact/contact';
import { Child } from './child/child';
import { Products } from './products/products';

@NgModule({
  declarations: [
    App,
    Header,
    Login,
    Contact,
    Child,
    Products
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
