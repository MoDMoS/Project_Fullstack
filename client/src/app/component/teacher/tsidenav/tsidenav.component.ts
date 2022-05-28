import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-tsidenav',
  templateUrl: './tsidenav.component.html',
  styleUrls: ['./tsidenav.component.css']
})
export class TsidenavComponent implements OnInit {

  auth = { 
    token: localStorage.getItem('auth-token') ,
    UserID: localStorage.getItem('UserID')
  }

  Name = localStorage.getItem('Name')

  constructor(public http: HttpClient, public router: Router, private crudService: CrudService) { }

  ngOnInit(): void {
  }

  verify(string: string) {
    this.crudService.verify(this.auth)
    .subscribe({
      next: (response) => {
        const res = Object.values(response)
        if(res[0] == localStorage.getItem('UserID')){
          if(string == "subject-form") this.router.navigate(['subject-form'])
          if(string == "sub-taught") this.router.navigate(['sub-taught'])
          if(string == "studentList") this.router.navigate(['studentList'])

        }else{
          alert("Token expired")
          this.router.navigate([''])
        }
      },
      error: () => alert("Token expired")
    });
  }
}
