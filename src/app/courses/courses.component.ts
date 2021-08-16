import { Component, OnInit } from '@angular/core';
import { LessonsService } from '../shared/services/lessons.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  // CHALLENGE
  // STEP 01: Update the form to show percentComplete
  // STEP 02: Updaet the form to show favorite

  selectedCourse = null;

  courses = null;

  constructor(private lessonsService: LessonsService) {}

  ngOnInit(): void {
    this.resetSelectedCourse();
    // this.courses = this.coursesService.all();
    this.loadCourses();
  }

  private loadCourses(): any {
    this.lessonsService
      .readLesson()
      .subscribe((courses) => (this.courses = courses));
  }
  resetSelectedCourse() {
    const emptyCourse = {
      id: null,
      title: '',
      description: '',
      percentComplete: 0,
      favorite: false,
    };

    this.selectedCourse = emptyCourse;
  }

  selectCourse(course) {
    this.selectedCourse = course;
  }

  saveCourse(course) {
    console.log(course);
    if (course.id) {
      this.lessonsService
        .updateLesson(course)
        .subscribe(() => this.loadCourses);
      this.resetSelectedCourse();
    } else {
      this.lessonsService
        .createLesson(course)
        .subscribe(() => this.loadCourses());
      this.resetSelectedCourse();
      // this.coursesService.create(course);
    }
  }

  deleteCourse(courseId) {
    this.lessonsService
      .deleteLesson(courseId)
      .subscribe(() => this.loadCourses());
    this.resetSelectedCourse();
  }

  cancel() {
    this.resetSelectedCourse();
  }
}
