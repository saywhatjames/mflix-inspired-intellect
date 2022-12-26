import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/state';
import { toggleMenu } from 'src/app/state/menu';

@Component({
  selector: 'mflix-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {


  constructor(private store: Store<State>) {
  }

  toggleMenu(_isMenuOpen: boolean): void {
    this.store.dispatch(
      toggleMenu({ toggle: _isMenuOpen })
    );
  }


}
