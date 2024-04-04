import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
@NgModule({
  declarations: [ // Which components this module will use, or "packages"
    AppComponent,
    ServerComponent
  ],
  imports: [ // Which modules this module will use
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent] // Which component to render at selector specified in component
})
export class AppModule { }
