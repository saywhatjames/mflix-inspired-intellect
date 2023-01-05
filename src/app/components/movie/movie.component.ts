import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Movie } from 'src/app/models/movie.model';
import { State } from 'src/app/state';
import { selectedMovieClicked } from 'src/app/state/movie';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'mflix-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent {

  @Input()
  movie!: Movie;

  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService, private store: Store<State>) { }



  //open modal and store selected movie
  
  showDetails(movieId: string): void {
    this.store.dispatch(
      selectedMovieClicked({ id: movieId })
    )
    this.modalRef = this.modalService.show(DetailsComponent, Object.assign({}, { class: 'modal-mflix' }));

  }

  handleImageError(event: ErrorEvent){
    if(event.target){let target = event.target as HTMLImageElement;
      target.src = "../../assets/images/error.png"
    };
    
  }
}
