import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hadash-chart-simple',
  templateUrl: './hadash-chart-simple.component.html',
  styleUrls: ['./hadash-chart-simple.component.less']
})
export class HadashChartSimpleComponent implements OnInit {

  @Input() data: any;
  max = 1;

  constructor() {
  }

  ngOnInit() {
    this.max = this.data.details.foa_stats.items[0].num * 1.1;
  }

}
