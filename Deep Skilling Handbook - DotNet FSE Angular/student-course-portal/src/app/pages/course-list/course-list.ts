import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCard } from '../../components/course-card/course-card'; // Import the child component

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCard], // Add CommonModule for *ngFor and CourseCard
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList {
  // Task 3: Parent component data[cite: 15]
  courses = [
    { id: 1, name: 'Cyber Security Basics', code: 'CS101', credits: 3 },
    { id: 2, name: 'Ethical Hacking', code: 'CS201', credits: 4 },
    { id: 3, name: 'Network Defense', code: 'CS301', credits: 3 }
  ];

  selectedCourseId: number | null = null;

  onEnroll(courseId: number) {
    console.log('Enrolling in course:', courseId);
    this.selectedCourseId = courseId;
  }
}