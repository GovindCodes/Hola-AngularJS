
import {Component} from '@angular/core'

@Component({
    selector: 'courses',
    template: `
    <h2>{{"Title: "+title}}</h2>
    <p>{{getTitle()}}</p>
    <ul>
        <li *ngFor="let course of courses">
            {{course}}
        </li>
    </ul>
    `
})
export class CoursesComponent{
title= 'List of courses';
getTitle(){
    return this.title;
}
courses;

} 