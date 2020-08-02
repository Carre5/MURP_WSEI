import { Pipe, PipeTransform } from '@angular/core';
import { ExploreGrid } from '../explore-page/explore-grid.model';

@Pipe({
  name: 'myfilter',
  pure: false
})

export class ExploreTabPipe implements PipeTransform {
  transform(grid: ExploreGrid[], filter: number): ExploreGrid[] {
    if (!grid || !filter) {
      //return grid;
      }
      // filter items array, items which match and return true will be
      // kept, false will be filtered out
      //return items.filter(item => item.title.indexOf(filter.title) !== -1);
    return grid.filter(item => item.area == filter);
    }


}
