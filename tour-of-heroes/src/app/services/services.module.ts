import { ModuleWithProviders, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HeroSearchService } from './hero-search.service';
import { HeroService } from './hero.service';

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
