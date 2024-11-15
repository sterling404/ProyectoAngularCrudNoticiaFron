import { Component, EventEmitter, Output,Inject, OnInit, } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  @Output() sendFormEvet: EventEmitter<any> = new EventEmitter();
  
  constructor(
    private authService:AuthService, private router:Router
  ){

  }
  ngOnInit(): void {
    console.log('hola')
  }

  loginForm = new FormGroup({
    email: new FormControl('',[Validators.required,] ),
    password: new FormControl('',[Validators.required,] ),
    
  })
  get email(): FormControl{
    return this.loginForm.controls['email']
  }
  get password(): FormControl{
    return this.loginForm.controls['password']
  }
  login(){
    if(this.loginForm.valid){
      const {email,password}= this.loginForm.value
      const data ={
        email: this.loginForm.value.email,
        password: this.loginForm.value.password
      }
      console.log(data)
      this.authService.login(data).subscribe({
        next: (res: any) => {
          this.authService.setToken(res.token);
          this.router.navigateByUrl('/');
        },
        error: () => {},
      });

    }
  }
}
