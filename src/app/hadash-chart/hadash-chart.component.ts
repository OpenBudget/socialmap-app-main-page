import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hadash-chart',
  templateUrl: './hadash-chart.component.html',
  styleUrls: ['./hadash-chart.component.less']
})
export class HadashChartComponent {

  @Input() data: any;

  constructor() {
  }

  path(item: any) {
    return `M${item.label_x + 15},${item.label_y + 20}
            L${item.label_x + 45},${item.label_y + 20}
            L${item.x},${item.y}
           `;
  }

  activityReport(name: string) {
    return 'https://next.obudget.org/i/reports/ngo-activity-report/' +
      name + '?theme=socialmap';
  }

  onNavigate(url: string) {
    window.location.href = url;
  }

}
