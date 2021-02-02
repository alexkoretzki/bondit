import { Component, OnInit } from '@angular/core';
import { ITableItem } from 'src/app/ui/data-table/interfaces/item.interface';
import { ITableConfig } from 'src/app/ui/data-table/interfaces/table.config';
import { IMovie } from '../interfaces/movie.interface';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-archived-movies',
  templateUrl: './archived-movies.component.html',
  styleUrls: ['./archived-movies.component.scss'],
})
export class ArchivedMoviesComponent implements OnInit {
  tblConfig: ITableConfig = {
    columns: [
      {
        val: 'id',
        dataKey: 'id',
      },
      {
        val: 'name',
        dataKey: 'movieName',
      },
      {
        val: 'category',
        dataKey: 'category',
      },

      {
        val: 'price',
        dataKey: 'price',
      },
    ],
    containCheckbox: false,
  };
  movies: ITableItem[] = [];
  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getArchivedMovies().subscribe((movies) => {
      this.movies = movies.map((movie) => {
        return {
          data: movie,
          isChecked: movie.archived,
        };
      });
    });
  }
}
