import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-course-card',
  standalone: true,
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCard implements OnChanges {
  // Task 3: @Input and @Output[cite: 15]
  @Input() course!: { id: number, name: string, code: string, credits: number };
  @Output() enrollRequested = new EventEmitter<number>();

  // Task 2: ngOnChanges[cite: 15]
  ngOnChanges(changes: SimpleChanges) {
    console.log('Course changed from:', changes['course'].previousValue, 'to:', changes['course'].currentValue);
  }
}