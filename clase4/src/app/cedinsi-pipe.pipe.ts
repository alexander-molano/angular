import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cedinsiPipe'
})
export class CedinsiPipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value + ' Angular ' + args[0] + ',' + args[1];
  }

}
