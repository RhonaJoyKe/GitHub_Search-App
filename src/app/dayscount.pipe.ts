import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dayscount'
})
export class DayscountPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
