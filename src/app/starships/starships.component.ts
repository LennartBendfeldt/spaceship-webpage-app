import { Component, OnInit } from '@angular/core';
import { Starship } from '../starship';

import { STARSHIPS } from '../mock-starships';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {
  starships = STARSHIPS;

  selectedStarship?: Starship;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(starship: Starship): void {
    this.selectedStarship = starship;
  }
}