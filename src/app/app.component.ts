import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './state';
import { appLoaded} from './state/movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'mflix';

  constructor(private store: Store<State>) {
  }

  ngOnInit(): void {
    //initial Action when app is loaded to trigger api fetch
    this.store.dispatch(appLoaded());
  }


}
