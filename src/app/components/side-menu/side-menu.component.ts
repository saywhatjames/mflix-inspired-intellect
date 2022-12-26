import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/state';
import { selectMenus, toggleMenu } from 'src/app/state/menu';
import { resetMoviesClicked, filterMoviesClicked } from 'src/app/state/movie';

@Component({
  selector: 'mflix-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  menuToggle$ = this.store.select(selectMenus)

  genres = ["Action", "Crime", "Mystery", "Documentary", "Thriller", "Sport", "Short", "Drama", "Fantasy", "Western", "Comedy", "Family", "Romance", "Adventure", "War", "Animation", "Short", "Horror", "History"]

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    //sort genre in alphabetical Order
    this.genres.sort((a, b) => a.localeCompare(b))

    //insert All option for resetting the list
    this.genres.unshift("All")
  }

  setGenre(_genre: string): void {
    //reset list if All is selected
    if (_genre === "All") {
      this.store.dispatch(
        resetMoviesClicked({ genre: _genre })
      )
    } else
      this.store.dispatch(
        filterMoviesClicked({ genre: _genre })
      );
  

  //close Menu everytime a genre is clicked
    this.store.dispatch(
      toggleMenu({ toggle: false })
    );
  }

}
