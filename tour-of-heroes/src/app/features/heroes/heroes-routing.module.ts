import { HeroesComponent } from './components/heroes/heroes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroesListComponent } from './components/heroes-list/heroes-list.component';

const routes: Routes = [
  {
    path: 'heroes',
    component: HeroesComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: HeroesListComponent
      },
      {
        path: ':id',
        component: HeroDetailComponent
      }
    ]
    /*redirectTo: 'heroes/list',
    pathMatch: 'full'*/
  },
  /*{
    path: 'heroes/list',
    component: HeroesListComponent
  },
  {
    path: 'heroes/:id',
    component: HeroDetailComponent
  }*/
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
