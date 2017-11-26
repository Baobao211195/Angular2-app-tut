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
}

