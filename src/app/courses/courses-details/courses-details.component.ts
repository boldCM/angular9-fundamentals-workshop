import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-courses-details',
  templateUrl: './courses-details.component.html',
  styleUrls: ['./courses-details.component.scss'],
})
export class CoursesDetailsComponent implements OnInit {
  changeCourse;

  @Output() saveCourse = new EventEmitter();
  @Output() cancel = new EventEmitter();

  // state management
  //  die aktulle Eingabe in eine Variable zwischenspeichern, damit sie nicht sofort in der courses-list sichtbar ist

  // ich kriege den Input namens selectedCourse.
  // dann müsste ich wahrscheinlich auch das ngModel ändern, wobei ne, nicht direkt im Inputfield.
  // ich muss quasi beim output, also beim saveCourse was anderes mitschicken,als was ich beim selectedCourse reinbekomme

  @Input() set selectedCourse(value) {
    if (value) {
      console.log(value);
      this.changeCourse = Object.assign({}, value);
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
