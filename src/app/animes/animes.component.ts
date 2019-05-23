import { Component, OnInit } from '@angular/core';
import { ANIMES } from '../mock-animes';

@Component({
  selector: 'app-animes',
  templateUrl: './animes.component.html',
  styleUrls: ['./animes.component.css']
})
export class AnimesComponent implements OnInit {
  displayedColumns: string[] = ['time', 'name', 'weight', 'download'];
  animes = ANIMES;

  isNew : boolean = false;
  isComplete : boolean = false;
  isRecent : boolean = false;

  constructor() { }

  changed() {
    // var currentTime = (new Date()).getTime();
    // var deadline = currentTime - 1000 * 60 * 60 * 24 * 7;
    if (!this.isNew && !this.isComplete) {
      this.animes = ANIMES;
      return;
    }
    var self = this;
    this.animes = ANIMES.filter(function(anime) {
      return ((anime.isNew === self.isNew) && (anime.isComplete === self.isComplete));
    });
    
  }
  ngOnInit() {
  }

}
