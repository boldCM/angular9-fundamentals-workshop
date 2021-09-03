import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-courses-details',
  templateUrl: './courses-details.component.html',
  styleUrls: ['./courses-details.component.scss'],
})
export class CoursesDetailsComponent implements OnInit {
  @Input() selectedCourse;
  @Output() saveCourse = new EventEmitter();
  @Output() cancel = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
