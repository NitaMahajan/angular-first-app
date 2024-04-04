import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { WarningComponent } from './warning/warning.component';
import { SuccessComponent } from './success/success.component';
@NgModule({
  declarations: [ // Which components this module will use, or "packages"
    AppComponent,
    ServerComponent,
    WarningComponent,
    SuccessComponent
  ],
  imports: [ // Which modules this module will use
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent] // Which component to render at selector specified in component
})
export class AppModule { }
