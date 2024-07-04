import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

interface Student{
  "id": number,
  "name": string,
  "type": string
}

@Injectable({
  providedIn: 'root'
})
export class FirstService {

  students : Student[] = []

  constructor(private http : HttpClient) { }

  getSomethingFromServiceOne() {
    return this.http.get<Student[]>(environment.apiURL +"/first").subscribe(
      (res) => this.students = res
    );
  }

  getStudents(){
    return this.students;
  }

  resetStudents(){
    this.students = [];
  }
}
