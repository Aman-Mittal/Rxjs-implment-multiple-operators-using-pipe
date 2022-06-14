import { Component, OnInit } from '@angular/core';
import { of, interval } from 'rxjs';
import { filter, map } from 'rxjs/operators';
// filter is a operator for filtering

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    const newObservable = interval(1000);

    newObservable.subscribe((number) => {
      if (number % 2 === 0) {
        console.log('Event:'+number);
      }
    });
    newObservable
      .pipe(
        filter((number) => {
          return number % 2 === 0;
        }),
        map((number)=>{
          return 'Gone through map:'+number;
        }),
        
      )
      .subscribe((number) => {
        console.log('filtered :' + number);
      });
  }
}
