import { Component, OnInit } from '@angular/core';
import { Hero } from '../../models/hero';
@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {
  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
  model = new Hero(18, 'Dr. WhatIsHisName', this.powers[0], 'Dr. WhatIsHisName');
  submitted = false;
  constructor() { }

  ngOnInit(): void {
  }
  newHero() {
    this.model = new Hero(42, '', '');
  }
  onSubmit() { this.submitted = true; }
}
