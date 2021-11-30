import { Pipe, PipeTransform } from '@angular/core';
import { Pet } from '../Pet';

@Pipe({
  name: 'nameFilter'
})
export class NameFilterPipe implements PipeTransform {

  transform(pets: Pet[], searchText:string): any[] {
    searchText.toLowerCase();

    return pets.filter(it=> {
      return it.name.toLocaleLowerCase().includes(searchText);
    });
  }

}
