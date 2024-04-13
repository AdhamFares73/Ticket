import { Component , Input } from '@angular/core';
import { MessageService  } from 'primeng/api';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  providers:[ MessageService ]
})
export class CardComponent {
  value: string | undefined;
  constructor(private messageService: MessageService) {
}

show() 
{
    this.messageService.add({ severity: 'info', summary: 'Success', detail: 'Data Copied' });
}

}