import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Hero } from 'src/app/models/hero';
import { HeroService } from 'src/app/services/hero.service';
@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {
  heroes$!: Observable<Hero[]>;
  searchTerm$ = new Subject<string>();
  constructor(
    private heroService: HeroService,
  ) { }
  ngOnInit(): void {
    this.heroes$ = this.searchTerm$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.heroService.searchHeroes(term))
    )
  }

  search(term: string): void {
    this.searchTerm$.next(term);
  }
}
