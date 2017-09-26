import {Component, OnInit} from '@angular/core';
import { ScriptService }   from './services/script.service';

@Component({
    selector: 'app',
    templateUrl: './html/app.component.html',
})
export class AppComponent implements OnInit {
    constructor(
        private script: ScriptService
    ){}

    ngOnInit(): void {
        this.script.loadScript('script').then(data => {
            console.log('script loaded ', data);
        }).catch(error => console.log(error));
    }
}
