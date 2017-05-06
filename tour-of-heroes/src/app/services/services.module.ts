import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpModule } from '@angular/http';

import { HeroService } from './hero.service';
import { HeroSearchService } from './hero-search.service';

@NgModule({
  imports: [
    HttpModule
  ]
})
export class ServicesModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ServicesModule,
      providers: [
        HeroService,
        HeroSearchService
      ]
    };
  }
 }
