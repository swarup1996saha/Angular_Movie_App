import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/service/movie.service';
import { NavbarService } from 'src/app/service/navbar.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss'],
})
export class AddMovieComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private navbarService: NavbarService,
    private movieService: MovieService,
    private router:Router
  ) {}

  movieForm = this.fb.group({
    name: ['', [Validators.required]],
    image: ['', [Validators.required]],
    genre: ['', [Validators.required]],
    releaseYear: ['', [Validators.required]],
  });

  ngOnInit(): void {
    this.navbarService.title.next('Add Movies');
  }

  addMovie() {
    if (this.movieForm.valid) {
      this.movieService.addMovie(this.movieForm.value).subscribe(res=>{
        this.movieForm.reset()
        this.router.navigate(['/'])
      })
    }
  }
}
