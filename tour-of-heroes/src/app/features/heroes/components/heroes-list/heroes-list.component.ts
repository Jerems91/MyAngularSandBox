import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../../../../beans/hero';
import { HeroService } from '../../../../services/hero.service';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {
  heroes: Hero[];
  constructor(
    private heroService: HeroService,
    private router: Router
  ) {};
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  selectedHero: Hero;
  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
  ngOnInit(): void {
    this.getHeroes();
  }
  gotoDetail(): void {
    this.router.navigate(['/heroes',this.selectedHero.id]);
  }
  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService.createHero(name).then(hero => {
      this.heroes.push(hero);
      this.selectedHero = null;
    });
  }
  delete(hero: Hero): void {
    this.heroService.deleteHero(hero.id).then(() => {
      this.heroes = this.heroes.filter(h => h !== hero);
      if (this.selectedHero === hero) {
        this.selectedHero = null;
      }
    })
  }
}
