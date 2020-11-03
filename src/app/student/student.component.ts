import { Component, OnInit, Input } from '@angular/core';
import {Student} from './student.model';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  @Input() student: Student;

  constructor() {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  clickedBtn() {
    console.log('Student: ' + this.student.name);
  }
}
