import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from './login';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myform: FormGroup;
  who!: Login;

  constructor(private fb: FormBuilder, public http: HttpClient, public router: Router) { 
    this.myform = this.fb.group ({
      UserID: ['',[Validators.required]],
      password: ['',[Validators.required]],
    })
  }
    
  ngOnInit(): void {
  }
  
  login(){
    //console.log(this.myform.value);
    this.http.post('http://localhost:4000/api/user/login', this.myform.value).subscribe({
      next: (response) => {
        const res = Object.values(response)
        console.log(res[1]);
        if(res[0] == 'Student') {
          this.router.navigate(['register'])
          localStorage.setItem('auth-token', res[1]);
          localStorage.setItem('UserID', res[2]);
          localStorage.setItem('Name', res[3]);
        }
        if(res[0] == 'Teacher') {
          this.router.navigate(['subject-form'])
          localStorage.setItem('auth-token', res[1]);
          localStorage.setItem('UserID', res[2]);
          localStorage.setItem('Name', res[3]);
        }
        if(res[0] == 'Leader') {
          this.router.navigate(['create-user'])
          localStorage.setItem('auth-token', res[1]);
          localStorage.setItem('UserID', res[2]);
          localStorage.setItem('Name', res[3]);
        }
        if(res[0] == 'Login fail') alert("Login failed")
      },
      error: (error) => console.log(error),
    });
  }
}
