import { Component, EventEmitter, Output,Inject, OnInit, OnDestroy, } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {ThemePalette} from '@angular/material/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { typeBlog, jobs } from 'src/app/interface/app-interface';
import { Editor, Toolbar } from 'ngx-editor';



@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class FormDialogComponent implements OnInit {
  @Output() sendFormEvet: EventEmitter<any> = new EventEmitter();
  editor!: Editor;
  toolbar: Toolbar = [];

  

  ngOnInit(): void {
    
    this.editor = new Editor();

    this.toolbar = [
      ['bold', 'italic'],
      ['underline', 'strike'],
      ['code', 'blockquote'],
      ['ordered_list', 'bullet_list'],
      [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
      ['link', 'image'],
      ['text_color', 'background_color'],
      ['align_left', 'align_center', 'align_right', 'align_justify'],
    ];
  }
  
  constructor(private dialogRef: MatDialogRef<FormDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any){
    this.myForm = new FormGroup({
      title: new FormControl(data?.title || '', [Validators.required]),
      SubTitle: new FormControl(data?.subtitle || '', [Validators.required]),
      conten: new FormControl(data?.body || '', [Validators.required]),
      typeNews: new FormControl(data?.report_type || '', [Validators.required]),
      topnews: new FormControl(data?.is_primary ?? true, Validators.required),
      publisherName: new FormControl(data?.publisher_name || null, [Validators.required, Validators.pattern('[a-zA-Z\\s]*')]),
      publisher_job: new FormControl(data?.publisher_job || null, [Validators.required])
    });
  }
  // ngOnDestroy(): void {
  //   if (this.editor) {
  //     this.editor.destroy();
  //     throw new Error('Method not implemented.');
  //   }
  // }

  types:typeBlog[] =[
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
  jobs:jobs[] =[
    
    {
      id:1,
      name:"Informatico",
      
    },
    {
      id:2,
      name:"Spicologo",
    },
    {
      id:3,
      name:"Profesor",
     
    },
    {
      id:4,
      name:"Creador digital",
     
    },
   
  ]
  myForm = new FormGroup({
    title: new FormControl('',[Validators.required,] ),
    SubTitle: new FormControl('',[Validators.required,] ),
    conten: new FormControl('',[Validators.required,] ),
    typeNews: new FormControl('',[Validators.required,] ),
    topnews: new FormControl(true,Validators.required,),
    publisherName: new FormControl(null,[Validators.required, Validators.pattern('[a-zA-Z\s]*'),]),
    publisher_job: new FormControl(null,[Validators.required])
    
  })
  // constructor
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
  get publisher_job(): FormControl{
    return this.myForm.controls['publisher_job']
  }
  getErrorMessage(){
    return'Campo obligatorio';
  }
  ngOnDestroy(): void {
    this.editor.destroy();
  }
  // onContentChange(content: string): void {
  //   console.log('Editor content changed:', content);
  //   this.htmlContent = content; // Actualiza la variable con el nuevo contenido
  // }
  saveForm(){
    if(this.myForm.valid){
      this.dialogRef.close(this.myForm.value)
      console.log(this.myForm.value)
    }else{
      alert('no es valido el formulario')
    }

  }
  
  closeModal(){
    // this.dialog
  }
 
  
}
