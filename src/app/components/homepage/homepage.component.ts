import { Component, OnInit,ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class HomepageComponent implements OnInit {
  
  title = '';
  constructor() {}

  ngOnInit(): void {}
}
