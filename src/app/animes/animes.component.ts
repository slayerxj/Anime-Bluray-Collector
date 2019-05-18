import { Component, OnInit } from '@angular/core';
import { Anime } from '../anime';
import { ANIMES } from '../mock-animes';

@Component({
  selector: 'app-animes',
  templateUrl: './animes.component.html',
  styleUrls: ['./animes.component.css']
})
export class AnimesComponent implements OnInit {
  animes = ANIMES;
  constructor() { }

  ngOnInit() {
  }

}
