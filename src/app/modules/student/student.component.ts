import { Component } from '@angular/core';
import {FirstService} from "../../services/first.service";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent {

  constructor(private firstService: FirstService) {
  }

  onProtectedEndpoint() {
    console.log("protected")
    this.firstService.getSomethingFromServiceOne()
  }

  displayStudent() {
    return this.firstService.getStudents()
  }
}
