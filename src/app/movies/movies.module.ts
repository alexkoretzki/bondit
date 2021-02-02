import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesWrapperComponent } from './movies-wrapper/movies-wrapper.component';
import { MoviesRoutes } from './movies.routing';
import { RouterModule } from '@angular/router';
import { ActiveMoviesComponent } from './active-movies/active-movies.component';
import { DataTableModule } from '../ui/data-table/data-table.module';
import { CreateMovieComponent } from './create-movie/create-movie.component';
import { MovieFormComponent } from './form/movie-form/movie-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { ArchivedMoviesComponent } from './archived-movies/archived-movies.component';

@NgModule({
  declarations: [
    MoviesWrapperComponent,
    ActiveMoviesComponent,
    CreateMovieComponent,
    MovieFormComponent,
    EditMovieComponent,
    ArchivedMoviesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(MoviesRoutes),
    DataTableModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [MoviesWrapperComponent],
})
export class MoviesModule {}
