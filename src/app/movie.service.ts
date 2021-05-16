import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Director } from './director';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }


  getMovies() {
    let url = 'http://localhost:8090/movies'
    return this.http.get(url)
  }

  getDirectors() {
    let url = 'http://localhost:8090/directors'
    return this.http.get(url)
  }


  addMovie(movie: Movie) {
    let url = 'http://localhost:8090/movies'
    return this.http.post(url, movie)
  }

  addDirector(director: Director) {
    let url = 'http://localhost:8090/directors'
    return this.http.post(url, director)
  }

  updateDirector(name: any, director: Director) {
    let url = `http://localhost:8090/directors/${name}`
    return this.http.put(url, director)
  }
  directorWork(director: any) {

    let url = `http://localhost:8090/directors/${director}`
    return this.http.get(url)
  }
  directorDetails(director: any) {
    let url = `http://localhost:8090/directors/details/${director}`
    return this.http.get(url)

  }

  deleteMovie(movie:any){
    let url = `http://localhost:8090/movies/${movie}`
    return this.http.delete(url)
  }
}
