import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subscription } from 'rxjs';
import { Movie } from 'src/app/models/movie.model';
import { State } from 'src/app/state';
import { selectSelectedMovie } from 'src/app/state/movie';

@Component({
  selector: 'mflix-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {
  movie: Movie | undefined;
  subscription: Subscription = new Subscription;

  constructor(private store: Store<State>, public bsModalRef: BsModalRef) { }


  ngOnInit(): void {
    this.subscription = this.store.select(selectSelectedMovie).subscribe(_movie => { this.movie = _movie })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }





}
