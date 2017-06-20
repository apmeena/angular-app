import { Hero } from './hero';
import { HEROS } from './mock.heros';
import { Injectable } from '@angular/core';

@Injectable()

export class HeroService {

    getHeros(): Promise<Hero[]> {
        return Promise.resolve(HEROS);
    }

    getHeroById(id : number): Promise<Hero> {
        return Promise.resolve(HEROS.find(hero => hero.id === id));
    }
}