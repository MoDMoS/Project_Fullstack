import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  
})
export class SidenavComponent implements OnInit {
  auth = { 
    token: localStorage.getItem('auth-token') ,
    UserID: localStorage.getItem('UserID')
  }
  Name = localStorage.getItem('Name')

  constructor(public http: HttpClient, public router: Router) { }

  ngOnInit(): void {
  }

  verify(string: string) {
    
    this.http.post('http://localhost:4000/api/user/verify', this.auth).subscribe({
      next: (response) => {
        const res = Object.values(response)
        //console.log(res[0]);
        //console.log(string)
        // console.log(response)
        // console.log(localStorage.getItem('UserID'));
        if(res[0] == localStorage.getItem('UserID')){
          if(string == "register") this.router.navigate(['register'])
          if(string == "addSub") this.router.navigate(['addSub'])
          if(string == "changeSub") this.router.navigate(['changeSub'])
          if(string == "deleteSub") this.router.navigate(['deleteSub'])
          if(string == "resultSub") this.router.navigate(['resultSub'])
          if(string == "tableSub") this.router.navigate(['tableSub'])
        }else{
          alert("Token expired")
          this.router.navigate([''])
        }
      },
      error: () => alert("Token expired")
    });
  }
}
