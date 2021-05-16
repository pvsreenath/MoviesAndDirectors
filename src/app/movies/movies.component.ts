import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor(private _movieService:MovieService, private router:Router) { }
  movies:any;
  ngOnInit(): void {
    this._movieService.getMovies().subscribe(data=>{
      console.log(data)
      this.movies=data
    })
  }

  onClick(name:any){
    console.log(name)
    this._movieService.deleteMovie(name).subscribe(data=>{
      console.log(data)
      window.alert("movie has been deleted")
    },error=>{
      console.log(error)
      window.alert("something went wrong")
    })
  }

  getDirectorDetails(director:any){
    this.router.navigate(['/directors',director])
  }
}
