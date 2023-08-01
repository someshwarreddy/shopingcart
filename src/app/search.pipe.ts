import { Pipe, PipeTransform } from '@angular/core';
import { ecomm } from './ecomm.model';
@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  filterdvalue: ecomm[] | undefined;
  transform(value: ecomm[], args: string): any {

    if (!value) return null;
    if (!args) return value;
    console.log(args)
    // args = args.toLowerCase();
    // this.filterdvalue =
    return value.filter((item: any) => {
      return (JSON.stringify(item.title).toLowerCase().includes(args) || JSON.stringify(item.category).toLowerCase().includes(args))
    });

  }

}
