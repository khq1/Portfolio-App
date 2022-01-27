import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/message.service';
@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
})
export class ContactPageComponent implements OnInit {
  constructor(
    private messageService: MessageService) { }

  ngOnInit() {}
  CopiedMsg() {
    this.messageService.add(`E-mail copied to Clipboard`);
  }
}
