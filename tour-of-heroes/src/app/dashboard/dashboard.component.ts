import {Component, OnInit} from '@angular/core';

import {Hero} from 'app/model/hero';
import {HeroService} from 'app/services/hero.service';

@Component({
  selector: 'toh-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  constructor(private heroService: HeroService) {}
  ngOnInit(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1, 5));
  }
}