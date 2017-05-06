import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

import { Hero } from 'app/model/hero';
import { environment } from 'environments/environment';

@Injectable()
export class HeroSearchService {

  private heroesUrl = `${environment.API_URL}/heroes`;

  constructor(private http: Http) {}

  search(term: string): Observable<Hero[]> {
    const url = `${this.heroesUrl}?name_like=${term}`;
    return this.http.get(url)
                    .map(response => response.json());
  }
}
