import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  createUserForm: FormGroup;

  constructor(private fb: FormBuilder, private crudService: CrudService) {
    this.createUserForm = fb.group({
      UserID: '',
      status: '',
      firstname: '',
      email: '',
      password: '',
      address: '',
      telno: '',
    })
  }

  ngOnInit(): void {
  }

  mySelect = ''

  submit(){
    this.crudService.createUser(this.createUserForm.value)
    .subscribe(res => {
      let response = Object.values(res)
      if(response[0] == 'Error'){
        alert('Error')
      }else{
        alert('Success')
      }
      console.log(response);
    })
    console.log(this.createUserForm.value)
  }
}
