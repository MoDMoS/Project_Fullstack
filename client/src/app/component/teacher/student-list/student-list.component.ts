import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  StudentListResult: FormGroup
  Result:any = []
  Result2:any = []

  constructor(private crudService: CrudService, public formBuilder: FormBuilder) {
    this.StudentListResult = formBuilder.group({
      UserID: localStorage.getItem('UserID'),
      Term: 1,
      year: 2565,
      Subject: this.pass[0].value
    })
  }

  ngOnInit(): void {
    //console.log(this.StudentListResult.value);
    this.crudService.subjectTeach(this.StudentListResult.value)
    .subscribe(res => {
      const response = Object.values(res)
      //console.log(response);
      if(response[0] == 'Error'){
        this.Result = null
      }else{
        //console.log(res)
        this.Result = res
      }
      for(let i = 1; i < this.Result.length+1; i++){
        let id = this.Result[i-1].SubjectID
        this.pass.push({id: i, value: id})
      }
      this.setSec()
      //console.log(this.pass)
      //console.log(this.num)
    })
  }

  mySelect = '3';
  mySelect2 = '0';
  mySelect3 = '0';
  mySelect4 = '0';
  check = this.mySelect;
  selectedValue: any;
  selectedValue2: any;
  selectedValue3: any;
  num = [{id: 0, value: '1'}, {id: 1, value: '2'}]

  pass:any = [{id: 0, value: ''}]
  sec: any = []

  data = [
    {
      id: 1,
      value: '2563',
    },
    {
      id: 2,
      value: '2564',
    },
    {
      id: 3,
      value: '2565',
    }

  ];

  selectChange() {
    if(this.mySelect != this.check){
      this.mySelect2 = '0'
      this.check = this.mySelect
    }
    this.selectedValue = this.crudService.getDropDownText(this.mySelect, this.data)[0].value;
    this.selectedValue2 = this.crudService.getDropDownText(this.mySelect2, this.num)[0].value;
    this.selectedValue3 = this.crudService.getDropDownText(this.mySelect3, this.pass)[0].value;
    this.StudentListResult = this.formBuilder.group({
      UserID: localStorage.getItem('UserID'),
      year: [this.selectedValue],
      Term: [this.selectedValue2],
      SubjectID: [this.selectedValue3]
    })
    this.sec = []
    //console.log(this.StudentListResult.value);
    this.crudService.subjectTeach(this.StudentListResult.value)
    .subscribe(res => {
      const response = Object.values(res)
      //console.log(response[0]);
      if(response[0] == 'Error'){
        this.Result = null
        this.Result2 = []
        this.mySelect3 = '0'
        this.pass = [{id: 0, value: ''}]
        //console.log(this.pass);
      }else{
        //console.log(res)
        if(this.pass.length > 1){
          this.Result = res
          this.setSec()
        }else{
          this.Result = res
          //console.log(this.Result);
          for(let i = 1; i < this.Result.length+1; i++){
            let id = this.Result[i-1].SubjectID
            this.pass.push({id: i, value: id})
          }
        }
      }
    })
  }

  setSec(){
    this.selectedValue = this.crudService.getDropDownText(this.mySelect, this.data)[0].value;
    this.selectedValue2 = this.crudService.getDropDownText(this.mySelect2, this.num)[0].value;
    this.selectedValue3 = this.crudService.getDropDownText(this.mySelect3, this.pass)[0].value;
    this.crudService.subjectTeachSec(this.StudentListResult.value)
    .subscribe(res => {
      const response = Object.values(res)
      //console.log(response)
      if(response[0] == 'Error'){
        this.Result2 = []
      }else{
        console.log(res)
        for(let i = 0; i < res.length; i++){
          //console.log(res[0].SectionNo)
          this.sec.push({id: i, value: res[0].SectionNo})
        }
        //console.log(this.Result2);
        this.crudService.getStudent(res[0])
        .subscribe(res => {
          const response = Object.values(res)
          //console.log(response[0]);
          if(response[0] == 'Error'){
            this.Result2 = []
          }else{
            //console.log(res)
            this.Result2 = res
            //console.log(this.Result2)
          }
        })
      }
    })
  }

  
}
