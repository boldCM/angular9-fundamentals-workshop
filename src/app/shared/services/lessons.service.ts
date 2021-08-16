import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASE_URL = 'http://localhost:3000/';
const model = 'courses';
@Injectable({
  providedIn: 'root',
})
export class LessonsService {
  // public courseLessons: []
  constructor(private http: HttpClient) {}

  courseLessons = [
    { title: 'Hello Angular' },
    { title: 'Component Fundamentals' },
    { title: 'Template Driven Forms' },
    { title: 'Angular Services' },
    { title: 'Server Communication' },
    { title: 'Component Driven Architecture' },
    { title: 'Angular Routing' },
    { title: 'Unit Testing Fundamentals' },
  ];

  public readLesson(): Observable<Object> {
    // return this.courseLessons;
    return this.http.get(this.getUrl());
  }
  public createLesson(course): any {
    console.log('created course ', course);
    return this.http.post(this.getUrl(), course);
  }
  public updateLesson(course): any {
    console.log('updated ', course);
    return this.http.patch(this.getUrl() + `/${course.id}`, course);
  }
  public deleteLesson(courseId): any {
    console.log('deleted ', courseId);
    return this.http.delete(this.getUrl() + `/${courseId}`, courseId);
  }

  private getUrl(): string {
    return `${BASE_URL}${model}`;
  }
}
