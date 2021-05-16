import { Component, OnInit } from '@angular/core';
import { Director } from '../director';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-add-director',
  templateUrl: './add-director.component.html',
  styleUrls: ['./add-director.component.css']
})
export class AddDirectorComponent implements OnInit {

  constructor(private _movieService:MovieService) { }

  directorModel = new Director()
  ngOnInit(): void {
  }

  response:any
  onSubmit(){
    console.log(this.directorModel)
    this._movieService.addDirector(this.directorModel).subscribe(data=>{
      console.log(data);
      this.response=data;
      if(this.response.message=='success'){
        window.alert("director added")
      }
      else{
        window.alert("invalid data")
      }
    },error=>{
      console.log(error)
    })
  }
}
