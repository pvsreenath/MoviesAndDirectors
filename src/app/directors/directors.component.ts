import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MovieService } from '../movie.service';

@Component({
  selector: 'app-directors',
  templateUrl: './directors.component.html',
  styleUrls: ['./directors.component.css']
})
export class DirectorsComponent implements OnInit {

  constructor(private _movieService:MovieService, private router:Router) { }
 
  directors:any
  ngOnInit(): void {
    this._movieService.getDirectors().subscribe(data=>this.directors=data)
  }

  getDirectorWork(director:any){
    console.log(director)
    this.router.navigate(['/directors',director])
  }

  onClick(director:any){
    console.log(director);
    this.router.navigate(['/updateDirector',director])
  }

}
