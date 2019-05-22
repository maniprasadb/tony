import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ConfigService } from './config';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JioComponent } from './jio/jio.component';

@NgModule({
  declarations: [
    AppComponent,
    JioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ConfigService
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
