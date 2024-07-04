import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StudentComponent} from "./student.component";

const STUDENT_ROUTES: Routes = [
  { path: '', component: StudentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(STUDENT_ROUTES)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
