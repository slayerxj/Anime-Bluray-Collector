import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'rank'})
export class RankPipe implements PipeTransform {
  transform(value: number): string {
    var stars = [
        "&#9733;&#9733;&#9733;&#9733;&#9733;",
        "&#9733;&#9733;&#9733;&#9733;",
        "&#9733;&#9733;&#9733;",
        "&#9733;&#9733;",
        "&#9733;"
    ];
    return stars[value];
  }
}