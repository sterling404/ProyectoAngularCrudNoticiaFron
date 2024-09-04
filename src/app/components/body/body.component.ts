import { Component } from '@angular/core';

interface Food {
  value: string;
  viewValue: string;
}

interface  City {
  id:number;
  name:string;
  population:number;
  size:number;
  active:boolean;
}

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
  cities:City[] =[
    {
      id:1,
      name:"chillan",
      population:20,
      size:300,
      active:true
    }
  ]
}
