import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-lsidenav',
  templateUrl: './lsidenav.component.html',
  styleUrls: ['./lsidenav.component.css']
})
export class LsidenavComponent implements OnInit {

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
        //console.log(res[0]);
        //console.log(string)
        // console.log(response)
        // console.log(localStorage.getItem('UserID'));
        if(res[0] == localStorage.getItem('UserID')){
          if(string == "create-user") this.router.navigate(['create-user'])
        }else{
          alert("Token expired")
          this.router.navigate([''])
        }
      },
      error: () => alert("Token expired")
    });
  }

}
