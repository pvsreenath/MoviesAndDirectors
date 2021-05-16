import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { DirectorsComponent } from './directors/directors.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddDirectorComponent } from './add-director/add-director.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { UpdateDirectorComponent } from './update-director/update-director.component';
import { DeleteMovieComponent } from './delete-movie/delete-movie.component';
import { FormsModule } from '@angular/forms';
import { DirectorDetailsComponent } from './director-details/director-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    DirectorsComponent,
    HomeComponent,
    AddDirectorComponent,
    AddMovieComponent,
    UpdateDirectorComponent,
    DeleteMovieComponent,
    DirectorDetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
