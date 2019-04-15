import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-coins-chart-simple',
  templateUrl: './coins-chart-simple.component.html',
  styleUrls: ['./coins-chart-simple.component.less']
})
export class CoinsChartSimpleComponent implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

}
