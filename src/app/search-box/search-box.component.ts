import {Component, ElementRef, OnInit} from '@angular/core';
import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  constructor(private el: ElementRef) { }

  ngOnInit() {
    fromEvent(this.el.nativeElement, 'keyup')
      .pipe(
        map((e: any) => e.target.value),
      ).subscribe(
      (val: string) => {
        console.log('valll ', val)
      },
      (err: any) => {

      },
      () => {

      }
    )
  }

}
