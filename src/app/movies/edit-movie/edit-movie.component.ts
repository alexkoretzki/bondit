import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from 'src/app/ui/toast/service/toast.service';
import { IMovie } from '../interfaces/movie.interface';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.scss'],
})
export class EditMovieComponent implements OnInit {
  movie: IMovie;
  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService,
    private router: Router,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    const movieId = this.route.snapshot.params.id;
    this.movie = this.moviesService.getMovie(movieId);
    if (!this.movie) this.router.navigate(['/']);
  }
  editMovie(movie: IMovie): void {
    this.moviesService.editMovie(movie.id, movie);
    this.toastService.showToast(`movie ${movie.movieName} was updated`);
    this.router.navigate(['/movies/active']);
  }
}
