import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-flag-chart',
  templateUrl: './flag-chart.component.html',
  styleUrls: ['./flag-chart.component.less']
})
export class FlagChartComponent implements OnInit {

  @Input() data: any;
  private districts: any[] = [];

  constructor() {
  }

  ngOnInit() {
    for (const d of Object.keys(this.data.details.district_totals)) {
      console.log(d);
      const di = this.data.details.district_totals[d];
      di.name = d;
      this.districts.push(di);
    }
    this.districts.sort((a, b) => b.totals - a.totals);
    console.log(this.districts);
  }

}
