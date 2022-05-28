import { HttpClient } from '@angular/common/http';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../../../service/crud.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  auth = { 
    token: localStorage.getItem('auth-token') ,
    UserID: localStorage.getItem('UserID')
  }

  constructor(
    public formBuilder: FormBuilder,
    // private router: Router,
    // private ngZone: NgZone,
    private crudService: CrudService,
    private http: HttpClient,
    private router: Router
  ) {
    this.registerForm = formBuilder.group({
      UserID: localStorage.getItem('UserID'),
      SubjectID: [''],
      SectionNo: [''],
    });
  }

  ngOnInit(): void {}

  onSubmit(): any {
    this.http.post('http://localhost:4000/api/user/verify', this.auth).subscribe({
      next: (response) => {
        const res = Object.values(response)
        console.log(res[0]);
        if (res[0] == localStorage.getItem('UserID')) {
          this.crudService.createRegister(this.registerForm.value).subscribe(
            () => {
              console.log('Register successfully!');
              // this.ngZone,run(() =>)
            },
            (error) => {
              console.log(error);
            }
          );
        } else {
          alert('Token expired');
          this.router.navigate([''])
        }
      },
      error: () => alert('Token expired')
    });
  }

  Array = new Array(3);
  add() {
    this.Array = new Array(this.Array.length + 1);
  }
  
}
