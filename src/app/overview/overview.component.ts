import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  data: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  selectedData = 3;
  constructor() { }

  ngOnInit() {
  }
onChange() {
console.log(this.selectedData);
}
}
