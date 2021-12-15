import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MessageService } from 'src/app/message.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class HomepageComponent implements OnInit {
  name: string | undefined;
  english = true;
  constructor(private messageService: MessageService) {}

  ngOnInit() {}

  CopiedMsg() {
    this.messageService.add(`E-mail copied to Clipboard`);
  }
}
