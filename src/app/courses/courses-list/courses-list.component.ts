import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent implements OnInit {
  @Input() courses;
  @Output() selectedCourse = new EventEmitter();
  @Output() deleteCourse = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
