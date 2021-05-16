import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { error } from 'selenium-webdriver';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-director-details',
  templateUrl: './director-details.component.html',
  styleUrls: ['./director-details.component.css']
})
export class DirectorDetailsComponent implements OnInit {

  constructor(private _movieService: MovieService, private router: ActivatedRoute) { }

  director: any;
  directorDetails: any;
  movies: any;
  ngOnInit(): void {

    this.router.paramMap.subscribe((params: ParamMap) => {
      this.director = params.get('name');
      console.log(this.director)
      this._movieService.directorDetails(this.director).subscribe(data => {
        this.directorDetails = data;
      }, error => {
        console.log(error)
      });
      this._movieService.directorWork(this.director).subscribe(data => {
        this.movies = data
        console.log(this.movies)
        if (this.movies.length == 0) {
          window.alert("director has no movies")
        }
        console.log(data);

      },
        error => {
          console.log(error)
        })

    })

  }

}
