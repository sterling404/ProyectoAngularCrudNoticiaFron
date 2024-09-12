import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

// export interface DialogData {
//   animal: string;
//   name: string;
// }

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

  // animal: string;
  // name: string;

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

  // constructor(public dialog: MatDialog) {}

  // openDialog(): void {
  //   const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
  //     data: {name: this.name, animal: this.animal},
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     this.animal = result;
  //   });
  // }

}
