import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {map, Observable, shareReplay, timer} from "rxjs";
import {AsyncPipe, DatePipe} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe, DatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angwin';
  private _time$: Observable<Date> = timer(0, 1000).pipe(
    map(tick => new Date()),
    shareReplay(1)
  );

  get time() {
    return this._time$;
  }

}
