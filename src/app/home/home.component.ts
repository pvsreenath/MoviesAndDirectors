import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  getMovies(){
    this.router.navigate(['/movies'])
  }

  getDirectors(){
    this.router.navigate(['/directors'])
  }
  addMovie(){
    this.router.navigate(['/addMovie'])
  }
  addDirector(){
    this.router.navigate(['/addDirector'])
  }
  updateDirector(){
    this.router.navigate(['/updateDirector'])
  }
 
}
