import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {ThemePalette} from '@angular/material/core';


interface  type {
  id:number;
  name:string;
  
}

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {
  @Output() sendFormEvet: EventEmitter<any> = new EventEmitter();
  
  types:type[] =[
    {
      id:1,
      name:"Salud",
      
    },
    {
      id:2,
      name:"Deporte",
    },
    {
      id:3,
      name:"Educacion",
     
    },
    {
      id:4,
      name:"Politica",
     
    },
   
  ]
  myForm = new FormGroup({
    title: new FormControl('',[Validators.required,] ),
    SubTitle: new FormControl('',[Validators.required,] ),
    conten: new FormControl('',[Validators.required,] ),
    typeNews: new FormControl('hola',[Validators.required,] ),
    topnews: new FormControl(true,Validators.required,),
    publisherName: new FormControl(null,[Validators.required, Validators.pattern('[a-zA-Z]*'),])
    
  })
  get title(): FormControl{
    return this.myForm.controls['title']
  }
  get SubTitle(): FormControl{
    return this.myForm.controls['SubTitle']
  }
  get conten(): FormControl{
    return this.myForm.controls['conten']
  }
  get typeNews(): FormControl{
    return this.myForm.controls['typeNews']
  }
  get topnews(): FormControl{
    return this.myForm.controls['topnews']
  }
  get publisherName(): FormControl{
    return this.myForm.controls['publisherName']
  }
  getErrorMessage(){
    return'Campo obligatorio';
  }
  saveForm(){
    this.sendFormEvet.emit(this.myForm.value)
  }
  
 
  
}
