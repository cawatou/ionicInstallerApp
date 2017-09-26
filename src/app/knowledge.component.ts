import {Component, OnInit} from '@angular/core';
import {AppComponent} from "./app.component";

@Component({
    selector: 'knowledge',
    templateUrl: './html/knowledge.component.html'
})
export class KnowledgeComponent implements OnInit {
    knowledges:any = {};

    knowledges = [
        {
            id: 1,
            title: "Знание 1!",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aut blanditiis commodi, inventore laudantium magnam molestiae, nemo nobis odit pariatur perferendis possimus quae quo repellat reprehenderit sint sunt tempore! Quia!"
        },
        {
            id: 2,
            title: "Знание 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aut blanditiis commodi, inventore laudantium magnam molestiae, nemo nobis odit pariatur perferendis possimus quae quo repellat reprehenderit sint sunt tempore! Quia!"
        }
    ];
}
