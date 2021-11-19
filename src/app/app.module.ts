import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { EspecieModule } from './especie/especie.module';
import { EspecieService } from './especie/services/especie.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule, EspecieModule],
  providers: [EspecieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
