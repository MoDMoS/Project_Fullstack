import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LdataSubjectComponent } from './component/leader/ldata-subject/ldata-subject.component';
import { LstudentListComponent } from './component/leader/lstudent-list/lstudent-list.component';
import { LsubjectsTaughtComponent } from './component/leader/lsubjects-taught/lsubjects-taught.component';
import { LoginComponent } from './component/login/login.component';
import { AddSubComponent } from './component/student/add-sub/add-sub.component';
import { ChangeSubComponent } from './component/student/change-sub/change-sub.component';
import { DeleteSubComponent } from './component/student/delete-sub/delete-sub.component';

import { RegisterComponent } from './component/student/register/register.component';
import { ResultSubComponent } from './component/student/result-sub/result-sub.component';
import { TableSubComponent } from './component/student/table-sub/table-sub.component';
import { StudentListComponent } from './component/teacher/student-list/student-list.component';
import { SubjectFormComponent } from './component/teacher/subject-form/subject-form.component';
import { SubjectsTaughtComponent } from './component/teacher/subjects-taught/subjects-taught.component';
import { CreateUserComponent } from './component/leader/create-user/create-user.component';

const routes: Routes = [
  {path : '', component : LoginComponent},
  {path : 'register', component : RegisterComponent},
  {path : 'addSub', component : AddSubComponent},
  {path : 'changeSub', component : ChangeSubComponent},
  {path : 'deleteSub', component : DeleteSubComponent},
  {path : 'resultSub', component : ResultSubComponent},
  {path : 'tableSub', component : TableSubComponent},
  { path:'sub-taught' , component: SubjectsTaughtComponent},
  { path:'studentList' , component: StudentListComponent},
  { path:'ldata-subject' , component:LdataSubjectComponent},
  { path:'lsub-taught' , component: LsubjectsTaughtComponent},
  { path:'lstudentList' , component: LstudentListComponent},
  { path:'subject-form' , component: SubjectFormComponent},
  { path:'create-user', component: CreateUserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
