import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CedinsiDirectivaDirective } from './cedinsi-directiva.directive';
import { CedinsiEjercicioPipeComponent } from './cedinsi-ejercicio-pipe/cedinsi-ejercicio-pipe.component';
import { CedinsiPipePipe } from './cedinsi-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CedinsiDirectivaDirective,
    CedinsiEjercicioPipeComponent,
    CedinsiPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
