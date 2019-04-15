import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-coins-chart',
  templateUrl: './coins-chart.component.html',
  styleUrls: ['./coins-chart.component.less']
})
export class CoinsChartComponent implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

}
