import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMovie } from '../interfaces/movie.interface';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.scss'],
})
export class CreateMovieComponent implements OnInit {
  constructor(private moviesService: MoviesService, private router: Router) {}

  ngOnInit(): void {}
  createMovie(movie: IMovie): void {
    this.moviesService.addMovie(movie);
    this.router.navigate(['/movies/active']);
  }
}
