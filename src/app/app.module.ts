import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // needed for HttpClient
    RouterModule, // import RouterModule even if is standalone
    FormsModule, // needed for [(ngModel)]
    AppComponent, //instead, you need to import it into the AppModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
