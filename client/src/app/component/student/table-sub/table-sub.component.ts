import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../../service/crud.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-table-sub',
  templateUrl: './table-sub.component.html',
  styleUrls: ['./table-sub.component.css'],
})
export class TableSubComponent implements OnInit {
  registerResult: FormGroup;
  Result: any = [];

  Day = [
    { id: 0, day: 'Mon' },
    { id: 1, day: 'Tue' },
    { id: 2, day: 'Wed' },
    { id: 3, day: 'Thu' },
    { id: 4, day: 'Fri' },
    { id: 5, day: 'Sat' },
    { id: 6, day: 'Sun' },
  ];

  Time = [ '9:00', '13:00', '17:00' ]

  constructor(
    private crudService: CrudService,
    public formBuilder: FormBuilder
  ) {
    this.registerResult = formBuilder.group({
      UserID: localStorage.getItem('UserID'),
    });
  }

  ngOnInit(): void {
    this.crudService.subjectTest(this.registerResult.value).subscribe((res) => {
      console.log(res);
      this.Result = res;
    });
  }

  check(start1: string, start2: string, day1: string, day2: string){
    if(start1 == start2 && day1 == day2) return false
    else return true
  }
}
