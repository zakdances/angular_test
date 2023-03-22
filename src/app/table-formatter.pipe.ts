import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tableFormatter'
})
export class TableFormatterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
