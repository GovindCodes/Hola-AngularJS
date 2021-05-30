
import {Component} from '@angular/core'

@Component({
    selector: 'courses',
    template: '<h2>{{"Title: "+title}}</h2><p>{{getTitle()}}</p>'
})
export class CoursesComponent{
title= 'List of courses';
getTitle(){
    return this.title;
}
} 