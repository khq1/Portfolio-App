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
  /**
   * Language toogle boolean - BIO section [Markdown](https://marked.js.org/)
   */
  english = true;
  constructor(private router: Router, private messageService: MessageService) {}

  ngOnInit() {}
  /**
   * Navigate Router to Homepage with fragment ID [Markdown](https://marked.js.org/)
   */
  public buttonClick(fragment: string): void {
    this.router.navigate(['/Homepage']).then(() => {
      window.location.hash = fragment;

      this.messageService.add('Navigating to ' + fragment);
    });
  }
}

