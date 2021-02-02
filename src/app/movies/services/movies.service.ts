import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { IMovie } from '../interfaces/movie.interface';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private movies: IMovie[] = [];
  public clearTableSelections: Subject<any> = new Subject();
  private moviesSubject: BehaviorSubject<IMovie[]> = new BehaviorSubject<
    IMovie[]
  >(this.movies);

  addMovie(movie: IMovie): void {
    this.movies.push(movie);
    this.moviesSubject.next(this.movies);
    this.clearTableSelections.next();
  }

  getAll(): Observable<IMovie[]> {
    return this.moviesSubject.asObservable();
  }
  getMovie(id: string): IMovie {
    const movieArr = this.movies.filter((movie) => movie.id === id);
    if (movieArr.length > 0) return movieArr[0];
    return;
  }
  editMovie(id: string, movie: IMovie): void {
    const index = this.movies.findIndex((movie) => movie.id === id);
    this.movies[index] = movie;
    this.moviesSubject.next(this.movies);
    this.clearTableSelections.next();
  }
  getArchivedMovies(): Observable<IMovie[]> {
    return this.moviesSubject.asObservable().pipe(
      map((movies: IMovie[]) => {
        return movies.filter((movie) => movie.archived);
      })
    );
  }
}
