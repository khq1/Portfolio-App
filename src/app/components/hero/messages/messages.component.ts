import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent implements OnInit {
  name: string | undefined;
  ToggleMessages = true;

  constructor(public messageService: MessageService) {}

  ngOnInit() {
    this.messageService.add('Message Service: OK');
  }
  
 
  ToggleMessageComponent() {
    this.ToggleMessages = !this.ToggleMessages;
  }
}

