import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Guid } from 'src/app/core/guid/guid.class';
import { IMovie } from '../../interfaces/movie.interface';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.scss'],
})
export class MovieFormComponent implements OnInit {
  movieForm: FormGroup;
  @Input() movie: IMovie;
  @Output() saveBtnClick: EventEmitter<IMovie> = new EventEmitter<IMovie>();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.movieForm = this.fb.group({
      id: ['', []],
      movieName: ['', []],
      price: ['', []],
      rate: ['', []],
      category: ['', []],
      description: ['', []],
    });
    this.movieForm.controls['rate'].setValue('16');
    if (this.movie) this.populateFormForEdit();
  }
  onSubmit(e): void {
    const movieId = this.movieForm.controls['id'].value;
    const movie: IMovie = {
      id: movieId ? movieId : Guid.newGuid(),
      movieName: this.movieForm.controls['movieName'].value,
      category: this.movieForm.controls['category'].value,
      price: this.movieForm.controls['price'].value,
      description: this.movieForm.controls['description'].value,
      rate: this.movieForm.controls['rate'].value,
      archived: this.movie?.archived ? true : false,
    };
    this.saveBtnClick.emit(movie);
  }
  private populateFormForEdit(): void {
    this.movieForm.patchValue(this.movie);
  }
  changeRate(e) {
    this.movieForm.controls['rate'].setValue(e.target.value);
  }
}
