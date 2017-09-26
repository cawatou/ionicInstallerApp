import {Component} from '@angular/core';

@Component({
    selector: 'contracts',
    templateUrl: './html/contracts.component.html'
})
export class ContractsComponent {
    contracts:any = {};

    contracts = [
        {
            title: "Договор 1!",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aut blanditiis commodi, inventore laudantium magnam molestiae, nemo nobis odit pariatur perferendis possimus quae quo repellat reprehenderit sint sunt tempore! Quia!"
        },
        {
            title: "Договоры на все случаи жизни!",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aut blanditiis commodi, inventore laudantium magnam molestiae, nemo nobis odit pariatur perferendis possimus quae quo repellat reprehenderit sint sunt tempore! Quia!"
        },
        {
            title: "Договор 3",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aut blanditiis commodi, inventore laudantium magnam molestiae, nemo nobis odit pariatur perferendis possimus quae quo repellat reprehenderit sint sunt tempore! Quia!"
        }
    ];
}
