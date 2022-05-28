import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SidenavComponent } from './component/student/sidenav/sidenav.component';
import { NbThemeModule } from '@nebular/theme';
import { MatSliderModule } from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';

import { RegisterComponent } from './component/student/register/register.component';
import { AddSubComponent } from './component/student/add-sub/add-sub.component';
import { ChangeSubComponent } from './component/student/change-sub/change-sub.component';
import { DeleteSubComponent } from './component/student/delete-sub/delete-sub.component';
import { TableSubComponent } from './component/student/table-sub/table-sub.component';
import { ResultSubComponent } from './component/student/result-sub/result-sub.component';
import { LoginComponent } from './component/login/login.component';
import { SubjectsTaughtComponent } from './component/teacher/subjects-taught/subjects-taught.component';
import { StudentListComponent } from './component/teacher/student-list/student-list.component';
import { TsidenavComponent } from './component/teacher/tsidenav/tsidenav.component';
import { LsidenavComponent } from './component/leader/lsidenav/lsidenav.component';
import { LstudentListComponent } from './component/leader/lstudent-list/lstudent-list.component';
import { LsubjectsTaughtComponent } from './component/leader/lsubjects-taught/lsubjects-taught.component';
import { LdataSubjectComponent } from './component/leader/ldata-subject/ldata-subject.component';
import { SubjectFormComponent } from './component/teacher/subject-form/subject-form.component';
import { CreateUserComponent } from './component/leader/create-user/create-user.component';


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    RegisterComponent,
    AddSubComponent,
    ChangeSubComponent,
    DeleteSubComponent,
    TableSubComponent,
    ResultSubComponent,
    LoginComponent,
    SubjectsTaughtComponent,
    StudentListComponent,
    TsidenavComponent,
    LsidenavComponent,
    LstudentListComponent,
    LsubjectsTaughtComponent,
    LdataSubjectComponent,
    SubjectFormComponent,
    CreateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot(),
    MatSliderModule,
    MatCardModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
