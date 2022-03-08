import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../message.service';
import { Injectable } from '@angular/core';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
@Injectable({ providedIn: 'root' })
export class MessagesComponent implements OnInit {
  ToggleMessages = true;
  messagesNumber: Number | undefined;
  constructor(public messageService: MessageService) {}

  ngOnInit() {
    this.messageService.add('AI TBIS1: Welcome HumanBeing! Let me be your guide. Repeat After me: 0101010101');
  }

  ToggleMessageComponent() {
    this.ToggleMessages = !this.ToggleMessages;
    ngDoCheck('first', 'second');
  }
}

function ngDoCheck(arg0: string, arg1: string) {
  throw new Error('Function not implemented.');
}

