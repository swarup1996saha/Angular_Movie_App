import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Movie } from 'src/app/model/movie.model';
import { MovieService } from 'src/app/service/movie.service';
import { NavbarService } from 'src/app/service/navbar.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit,OnDestroy {

  id!:any
  movie!:Movie |any
  movieSub$!:Subscription

  constructor(private movieService:MovieService, private activatedRoute:ActivatedRoute, private navbarService:NavbarService) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id')
    // this.movieSub$ = this.movieService.movie(this.id).subscribe(movie=>{
    //   this.movie= movie
    //   console.log(this.movie);
    //   this.navbarService.title.next(movie!.name)
    // })
    this.movieSub$ = this.movieService.movieHttp(this.id).subscribe(movie=>{
      this.movie=movie
      // console.log(movie);
      this.navbarService.title.next(movie.name)
    })
  }


  ngOnDestroy(): void {
    this.movieSub$.unsubscribe()
  }

}
