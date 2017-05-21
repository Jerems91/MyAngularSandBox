import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Hero } from 'models';

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
