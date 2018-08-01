import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  dateVal: Date = new Date();
  dummy: Object = {
    firstName: 'fadi',
    lastName: 'quader',
  };

  imgURL: string = null;
  // imgURL: string = 'https://scontent.fgza4-1.fna.fbcdn.net/v/t1.0-9/36873931_1778197835593938_8584873398243426304_o.jpg?_nc_cat=0&oh=e4c1165d906d99dac93fce9e3cdf6200&oe=5C0DBFD3';
}
