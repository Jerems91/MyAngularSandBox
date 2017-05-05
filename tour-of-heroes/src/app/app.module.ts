import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { DashboardModule } from './features/dashboard/dashboard.module';
import { HeroesModule } from './features/heroes/heroes.module';

import { AppComponent } from './app.component';

import { HeroService } from './services/hero.service';
import { HeroSearchService } from './services/hero-search.service';   

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    DashboardModule,
    HeroesModule,
    AppRoutingModule
  ],
  providers: [HeroService,HeroSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
