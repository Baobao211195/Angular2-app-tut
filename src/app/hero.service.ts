import { Injectable } from '@angular/core';
import {HEROES} from './mock-heros';
import {Hero} from './hero';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {MessageService} from './message.service';

@Injectable()
export class HeroService {
  // inject MessageService
  private messageService: MessageService;
  constructor(messageService: MessageService) {
      this.messageService = messageService;
  }

  getHeroes(): Observable<Hero[]> {
    // send the message after get heroes
    this.messageService.add('HeroService: fetched heroes')
    return of(HEROES);
  }
  getHero(id: number): Observable<Hero> {
    // Todo: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}

