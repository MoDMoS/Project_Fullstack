import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService} from '../../../service/crud.service';

@Component({
  selector: 'app-change-sub',
  templateUrl: './change-sub.component.html',
  styleUrls: ['./change-sub.component.css']
})
export class ChangeSubComponent implements OnInit {

  registerForm: FormGroup;
  auth = { 
    token: localStorage.getItem('auth-token') ,
    UserID: localStorage.getItem('UserID')
  }

  constructor(
    public formBuilder: FormBuilder,
    private crudService: CrudService,
    private http: HttpClient,
    private router: Router
  ) {
    this.registerForm = formBuilder.group({
      UserID: localStorage.getItem('UserID'),
      SubjectID: [''],
      SectionOld: [''],
      SectionNew: ['']
    })
  }

  ngOnInit(): void {
  }

  onSubmit(): any {
    this.http.post('http://localhost:4000/api/user/verify', this.auth).subscribe({
      next: (response) => {
        const res = Object.values(response);
        console.log(res[0]);
        if (res[0] == localStorage.getItem('UserID')) {
        this.crudService.updateRegister(this.registerForm.value)
        .subscribe(() => {
          console.log("Change sections successfully!")
          // this.ngZone,run(() =>)
        }, (error) => {
          console.log(error)
        })
      } else {
        alert('Token expired');
        this.router.navigate([''])
      }
    },
    error: () => alert('Token expired'),
  });
  }
}
