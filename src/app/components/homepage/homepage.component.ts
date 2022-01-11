import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/message.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class HomepageComponent implements OnInit {
 
 
  english = true;
  constructor(
    private router: Router,  
    private messageService: MessageService
  ) {}

  ngOnInit() {}

  CopiedMsg() {
    this.messageService.add(`E-mail copied to Clipboard`);
  }
  public buttonClick(fragment: string): void {
    this.router.navigate(['/Homepage']).then(() => {
      window.location.hash = fragment;
      this.messageService.add('Navigating to ' + fragment);
    });
  }
}

