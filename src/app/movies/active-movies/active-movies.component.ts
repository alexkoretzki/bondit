import { getAllLifecycleHooks } from '@angular/compiler/src/lifecycle_reflector';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataTableComponent } from 'src/app/ui/data-table/data-table.component';
import { ITableItem } from 'src/app/ui/data-table/interfaces/item.interface';
import { ITableConfig } from 'src/app/ui/data-table/interfaces/table.config';
import { IMovie } from '../interfaces/movie.interface';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-active-movies',
  templateUrl: './active-movies.component.html',
  styleUrls: ['./active-movies.component.scss'],
})
export class ActiveMoviesComponent implements OnInit {
  @ViewChild(DataTableComponent) table: DataTableComponent;
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
    containCheckbox: true,
  };
  movies: ITableItem[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private moviesService: MoviesService
  ) {}

  ngOnInit(): void {
    this.moviesService.getAll().subscribe((movies: IMovie[]): void => {
      this.movies = movies.map((movie) => {
        return {
          data: movie,
          isChecked: movie.archived,
        };
      });
    });
    this.moviesService.clearTableSelections.asObservable().subscribe(() => {
      this.table.clearSelections();
    });
  }

  addMovie(): void {
    this.table.clearSelections();
    this.router.navigate(['create'], { relativeTo: this.route });
  }
  movieSelected(movie: IMovie): void {
    this.router.navigate([movie.id, 'edit'], { relativeTo: this.route });
  }
  archivedSelectionChange(val: any): void {
    const movie: IMovie = { ...val.item, archived: val.val };
    this.moviesService.editMovie(movie.id, movie);
  }
}
