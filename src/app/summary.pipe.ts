import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'summary'
})
export class SummaryPipe implements PipeTransform{
    transform(value: string, length ?: any){
        if(!value)
        return null;

        let actualLen = length ? length : 50
        return value.substr(0, actualLen) + "...";

    }
}