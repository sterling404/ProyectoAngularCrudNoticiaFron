import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  @Input() title!: string;
  @Input() SubTitle!: string;
  @Output() TitleEvent :EventEmitter <string>=new EventEmitter();
  @Output() SubTitleEvent :EventEmitter <string>=new EventEmitter();

  ngOnInit():void{
    console.log(this.title)
    console.log(this.SubTitle)
  }


  buttonPressed(){
    this.TitleEvent.emit('Aplicacion blog')
  }
  buttonpressedSub(){
    this.SubTitleEvent.emit('Aplicacion blog')
  }

}
