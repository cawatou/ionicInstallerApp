import {Component} from '@angular/core';

@Component({
    selector: 'main',
    templateUrl: './html/main.component.html'
})
export class MainComponent {
    user = JSON.parse(localStorage.getItem('user'));
}
