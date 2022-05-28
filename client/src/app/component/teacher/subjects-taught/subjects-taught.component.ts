import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-subjects-taught',
  templateUrl: './subjects-taught.component.html',
  styleUrls: ['./subjects-taught.component.css']
})
export class SubjectsTaughtComponent implements OnInit {

  techerResult: FormGroup
  Result:any = []

  constructor(private crudService: CrudService, public formBuilder: FormBuilder) {
    this.techerResult = formBuilder.group({
      UserID: localStorage.getItem('UserID'),
      Term: 1,
      year: 2565
    })
  }

  ngOnInit(): void {
    //console.log(this.techerResult.value);
    this.crudService.subjectTeach(this.techerResult.value)
    .subscribe(res => {
      const response = Object.values(res)
      //console.log(response);
      if(response[0] == 'Error'){
        this.Result = null
      }else{
        //console.log(res)
        this.Result = res
      }
    })
  }

  mySelect = '3';
  mySelect2 = '0';
  selectedValue: any;
  selectedValue2: any;
  num = [{id: 0, value: '1'}, {id: 1, value: '2'}]

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
    this.selectedValue = this.crudService.getDropDownText(this.mySelect, this.data)[0].value;
    this.selectedValue2 = this.crudService.getDropDownText(this.mySelect2, this.num)[0].value;
    this.techerResult = this.formBuilder.group({
      UserID: localStorage.getItem('UserID'),
      year: [this.selectedValue],
      Term: [this.selectedValue2],
    })
    // console.log(this.mySelect2);
    this.crudService.subjectTeach(this.techerResult.value)
    .subscribe(res => {
      const response = Object.values(res)
      //console.log(response[0]);
      if(response[0] == 'Error'){
        this.Result = null
      }else{
        //console.log(res)
        this.Result = res
      }
    })

}
}
