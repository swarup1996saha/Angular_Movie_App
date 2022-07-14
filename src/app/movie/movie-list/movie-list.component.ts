import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/model/movie.model';
import { MovieService } from 'src/app/service/movie.service';
import { NavbarService } from 'src/app/service/navbar.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {

  movies$!:Observable<Movie[]>
  loadingMovies!:Array<number>

  constructor(private movieService:MovieService, private navbarService:NavbarService) { }

  ngOnInit(): void {
  this.loadingMovies = new Array(10).fill(0).map((n,index)=>index)

  // this.movies$ = this.movieService.getMovies()
  this.movies$ = this.movieService.getMoviesHttp()
  this.navbarService.title.next('Movie')
  }

}
