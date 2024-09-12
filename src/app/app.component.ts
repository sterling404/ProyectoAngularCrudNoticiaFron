import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Noticiero';
  SubTitle='Curso des de cero'

  changeTitle(inputData:string){
    this.title= inputData;
  }
  changeSubTitle(inputData:string){
    this.SubTitle= inputData;
  }
  showFormValue(data:any){
    console.log(data)
  }

}
