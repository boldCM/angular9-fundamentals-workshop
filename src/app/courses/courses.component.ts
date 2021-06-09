import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  // CHALLENGE
  // STEP 01: Display courses using ngFor
  // STEP 02: Add event handler to select course
  // STEP 03: Display raw json of selected course

  public selectedCourse = null;

  courses = [
    {
      id: 1,
      title: 'Angular 9 Fundamentals',
      description: 'Learn the fundamentals of Angular 9',
      percentComplete: 26,
      favorite: true,
    },
    {
      id: 2,
      title: 'JavaScript The Really REALLY HARD PARTS',
      description: 'Worship Will Sentance',
      percentComplete: 50,
      favorite: true,
    },
    {
      id: 3,
      title: 'Java script',
      description: 'blabla',
      percentComplete: 75,
      favorite: true,
    },
    {
      id: 4,
      title: 'Java script',
      description: 'blabla',
      percentComplete: 75,
      favorite: true,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  selectCourse(course): void {
    console.log(course);
    this.selectedCourse = course;
  }

  saveCourse(courseId): void {
    console.log(courseId, 'saved!');
  }

  deleteCourse(courseId): void {
    console.log(courseId);
    this.courses.splice(this.courses.indexOf(courseId), 1);
    console.log(this.courses.splice(this.courses.indexOf(courseId), 1));
  }

  cancel(): void {
    console.log('canceled');
    const emptyCourse = {
      id: null,
      title: '',
      description: '',
      percentComplete: 0,
      favorite: false,
    };
    this.selectedCourse = emptyCourse;
  }
}
