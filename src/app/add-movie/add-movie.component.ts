import { Component, OnInit } from '@angular/core';
import { error } from 'selenium-webdriver';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  movieModel = new Movie()
  constructor(private _movieService:MovieService) { }
 

  ngOnInit(): void {
  }
  response:any
  onSubmit(){
    console.log("submitted")
    console.log(this.movieModel)
    this._movieService.addMovie(this.movieModel).subscribe(data=>{
      console.log(data);
      this.response=data;
      if(this.response.message=="success"){
        window.alert("movie added")
      }
      else{
        window.alert('unknown director!! please add director')
      }
     
    },

    error=>{
      console.log(error);
      
    })
  }
}
