import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[]
})
export class AppComponent implements OnInit {
  // protected title: string;
  constructor(private heroService : HeroService) {}

  title: string = "Hello hello";
  heros: Hero[];
  selectedHero: Hero;

  setHero(hero: Hero): void {
    this.heroService.getHeroById(hero.id).then( response => this.selectedHero = response );
  }

  ngOnInit(): void {
    this.heroService.getHeros().then( response => this.heros = response );
  }

  resetSelectedHero(): void {
    this.selectedHero = null;
  }
};