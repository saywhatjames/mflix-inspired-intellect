import { Component, ElementRef, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs';
import { Movie } from 'src/app/models/movie.model';
import { State } from 'src/app/state';
import { selectMovies } from 'src/app/state/movie';


@Component({
  selector: 'mflix-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {


  movies$ = this.store.select(selectMovies).pipe(tap((_data: Movie[] | undefined) => {
    //Reset slider position on filter changes
    if (this.slider) this.slide('reset');
  }));

  @ViewChild('slider')
  slider!: ElementRef;

  //create an offset interval for managing slider transition
  offset = 0;
  offsetInterval = 500;

  //variables for arrowChanging
  showLeftArrow = false;
  showRightArrow = false;


  constructor(private store: Store<State>) { }

  // method for contrlling slider movement
  slide(_direction: string): void {
    if (_direction === 'left') {
      this.offset += this.offsetInterval
    } else if (_direction === 'reset') {
      this.offset = 0;
    } else {
      this.offset -= this.offsetInterval
    }

    this.slider.nativeElement.style.transform = `translateX(${this.offset}px)`;
    this.mouseOverSlider(this.slider.nativeElement);
  }

  // method for showing hiding arrows for sliding on hover
  mouseOverSlider(_event: Event): void {
    this.showLeftArrow = this.offset < 0 ? true : false;
    this.showRightArrow = this.slider.nativeElement.clientWidth - this.offset < this.slider.nativeElement.scrollWidth ? true : false;
  }

}
