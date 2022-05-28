import { Component, OnInit } from '@angular/core';
import { CrudService} from '../../../service/crud.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-result-sub',
  templateUrl: './result-sub.component.html',
  styleUrls: ['./result-sub.component.css']
})
export class ResultSubComponent implements OnInit {

  registerResult: FormGroup
  Result:any = []

  constructor(
    private crudService: CrudService,
    public formBuilder: FormBuilder
    ) {
    this.registerResult = formBuilder.group({
      UserID: localStorage.getItem('UserID'),
      Term: 1,
      year: 2565
    })
  }

  ngOnInit(): void {
    console.log(this.registerResult.value)
    this.crudService.regirterResult(this.registerResult.value)
    .subscribe(res => {
      const response = Object.values(res)
      if(response[0] == 'Error'){
        this.Result = null
      }else{
        console.log(res)
        this.Result = res
      }
    })
  }
  
  mySelect = '3';
  mySelect2 = '0';
  check = this.mySelect;
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
    if(this.mySelect != this.check){
      this.mySelect2 = '0'
      this.check = this.mySelect
    }
    this.selectedValue = this.crudService.getDropDownText(this.mySelect, this.data)[0].value;
    this.selectedValue2 = this.crudService.getDropDownText(this.mySelect2, this.num)[0].value;
    this.registerResult = this.formBuilder.group({
      UserID: localStorage.getItem('UserID'),
      year: [this.selectedValue],
      Term: [this.selectedValue2],
    })
    //console.log(this.registerResult.value);
    this.crudService.regirterResult(this.registerResult.value)
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
}


