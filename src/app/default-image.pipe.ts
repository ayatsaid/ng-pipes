import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let image: string = value;
    if(!value) {
      image = args;
    }
    return image;
  }

}
