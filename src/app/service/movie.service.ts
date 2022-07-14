import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Movie, movies } from '../model/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private baseUrl = 'http://localhost:3000/movies'
  constructor(private httpClient:HttpClient) {}

  getMoviesHttp():Observable<Movie[]>{
    return this.httpClient.get<Movie[]>(this.baseUrl)
  }
  movieHttp(id:any):Observable<Movie>{
    return this.httpClient.get<Movie>(`${this.baseUrl}/${id}`)
  }
  addMovie(movie:Movie){
    return this.httpClient.post(this.baseUrl,movie)
  }

  getMovies(){
    return of(movies)
  }

  movie(id:any){
    return of(
      movies.find(movie=> +movie.id === +id)
    )
  }
}
