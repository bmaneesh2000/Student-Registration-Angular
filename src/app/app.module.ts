import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { FormComponent } from './form/form.component';
import { DisplayComponent } from './display/display.component';
import { StuffService } from './stuff.service';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    FormComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [StuffService],
  bootstrap: [AppComponent]
})
export class AppModule { }
