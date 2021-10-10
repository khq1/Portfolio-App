import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-data',
  templateUrl: './counter-data.component.html',
  styleUrls: ['./counter-data.component.scss']
})
export class CounterDataComponent implements OnInit {
  currentDate = new Date();
  
  constructor() { }

  ngOnInit(): void {
  }

}
