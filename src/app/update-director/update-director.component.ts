import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Director } from '../director';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-update-director',
  templateUrl: './update-director.component.html',
  styleUrls: ['./update-director.component.css']
})
export class UpdateDirectorComponent implements OnInit {

  directorModel=new Director();
  constructor(private _movieService:MovieService, private router:ActivatedRoute) { }

  director:any
  directorData:any;
  ngOnInit(): void {
    this.router.paramMap.subscribe((params: ParamMap) => {
      this.director = params.get('name');
      console.log(this.director);
      this._movieService.directorDetails(this.director).subscribe(data=>{
        this.directorData=data
       console.log(data)
       this.directorModel.name=this.directorData.name
       this.directorModel.age=this.directorData.age
       this.directorModel.awardCount=this.directorData.awardCount
       this.directorModel.gender=this.directorData.gender

      },
      error=>{
        console.log(error)
      })
    })
      
  }

  onSubmit(){
    this._movieService.updateDirector(this.director,this.directorModel).subscribe(data=>{
      console.log(data)
      window.alert("details have been updated")
    },error=>{
      console.log(error)
    })
  }

}
