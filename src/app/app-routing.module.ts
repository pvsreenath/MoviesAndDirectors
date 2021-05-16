import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDirectorComponent } from './add-director/add-director.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { DirectorDetailsComponent } from './director-details/director-details.component';
import { DirectorsComponent } from './directors/directors.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { UpdateDirectorComponent } from './update-director/update-director.component';

const routes: Routes = [
  {path:'',redirectTo:'home', pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'movies',component:MoviesComponent},
  {path:'directors',component:DirectorsComponent},
  {path:'directors/:name',component:DirectorDetailsComponent},
  {path:'addDirector',component:AddDirectorComponent},
  {path:'addMovie',component:AddMovieComponent},
  {path:'updateDirector/:name',component:UpdateDirectorComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
