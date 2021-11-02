import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [AppComponent,],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
  BrowserAnimationsModule,
],
  providers: [
            { provide: RouteReuseStrategy,
              useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  exports:[ReactiveFormsModule],
})
export class AppModule {}
