import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'courses',
  template: `
    <h2>{{ 'Title: ' + title }}</h2>
    <p>{{ getTitle() }}</p>
    <ul>
      <li *ngFor="let course of courses">
        {{ course }}
      </li>
    </ul>
    <img src = "{{imgUrl}}" />
    <img [src]= "imgUrl" />
    <br />
    <button class="btn btn-primary" [class.active]= "isActive">save</button>
  `,
})
export class CoursesComponent {
  title = 'List of courses';
  getTitle() {
    return this.title;
  }
  imgUrl = "https://media-exp1.licdn.com/dms/image/C4E22AQFI7jj6uO-WaA/feedshare-shrink_800/0/1622372581327?e=1625097600&v=beta&t=xKnyWZh-OqVnBxP0mKBUH4UqKzGEoBcFF6HaFJkfJy8";
  courses;
  isActive = true;
  constructor(service: CoursesService) {
    // let service = new CoursesService(); // bekar way
    this.courses = service.getCourses();
  }
}
