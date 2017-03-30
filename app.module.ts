import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Inject } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  providers: [
    { provide: 'navigator', useValue: navigator },
  ]
})
export class CoreModule {
  constructor( @Inject('navigator') private navigator: Navigator) { }
}
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
