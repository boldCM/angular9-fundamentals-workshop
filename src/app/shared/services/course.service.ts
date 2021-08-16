import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private courses = [
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
  ];

  constructor() {}
  // instead of read method macht er hier ein all: gib mir alles
  all() {
    return this.courses;
  }
  // gib mir nur bestimmte Sachen...
  find(courseId) {}

  create(course) {
    console.log('create course', course);
    this.courses.push(...course);
  }

  update(course) {
    console.log('updated course', course);
  }

  delete(courseId) {
    console.log('deleted course', courseId);
  }
}
