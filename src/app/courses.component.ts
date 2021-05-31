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
    <button [style.backgroundColor] = "isActive ? 'blue': 'white'">Style check</button>
    <br />
    <div (click) = "divClick()">
        <button (click) = "onClick($event)" >event test</button>
    </div>
    <input (keyup.enter) = "onKeyUp()" />
    <br />
    <input #email (keyup.enter) = "printField(email.value)" /> 
    <br />
    {{course.title | uppercase}} <br />
    {{course.ratings | number:'1.1-1'}}<br />
    {{course.reviews| number}}<br />
    {{course.price | currency:'INR'}}<br />
    {{course.releaseDate | date}}

    <br />
    <h1>Pipes</h1>
    {{paragraph | summary:10}}
  `,
})
export class CoursesComponent {
  title = 'List of courses';
  getTitle() {
    return this.title;
  }
  imgUrl = "https://media-exp1.licdn.com/dms/image/C4E22AQFI7jj6uO-WaA/feedshare-shrink_800/0/1622372581327?e=1625097600&v=beta&t=xKnyWZh-OqVnBxP0mKBUH4UqKzGEoBcFF6HaFJkfJy8";
  courses;
  isActive = false;
  constructor(service: CoursesService) {
    // let service = new CoursesService(); // bekar way
    this.courses = service.getCourses();
  }
  onClick($event: any){
      $event.stopPropagation();
      console.log("button clicked", $event)
  }
  divClick(){
      console.log("div clicked")
  }

  onKeyUp(){
      console.log("enter is pressed");
  }
  printField(email: any){
      console.log(email)
  }

  code = "qwerty";
  printCode(){
    console.log(this.code);
  }

  course = {
    title: "angular",
    ratings: 4.3,
    reviews: 12665236151,
    price: 883,
    releaseDate: new Date(2016, 3, 2)
  }


  paragraph= "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
}
