import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  isDisabled = true; //button disable for dev version
  constructor(public messageService: MessageService) {}

  ngOnInit() {
  }

}
