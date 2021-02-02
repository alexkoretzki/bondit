import { Routes } from '@angular/router';
import { ActiveMoviesComponent } from './active-movies/active-movies.component';
import { ArchivedMoviesComponent } from './archived-movies/archived-movies.component';
import { CreateMovieComponent } from './create-movie/create-movie.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { MoviesWrapperComponent } from './movies-wrapper/movies-wrapper.component';

export const MoviesRoutes: Routes = [
  {
    path: '',
    component: MoviesWrapperComponent,
    children: [
      {
        path: '',
        redirectTo: 'active',
        pathMatch: 'full',
      },
      {
        path: 'active',
        component: ActiveMoviesComponent,
        children: [
          {
            path: 'create',
            component: CreateMovieComponent,
          },
          {
            path: ':id/edit',
            component: EditMovieComponent,
          },
        ],
      },
      {
        path: 'archived',
        component: ArchivedMoviesComponent,
      },
    ],
  },
];
