import {Component, Input} from '@angular/core';

@Component({
  selector: 'hadash-chart',
  template: ` 
  <div class='tab-container'>
    <div class="bubble-chart">
    <svg 
        [attr.width]="data.details.foa_stats.width + 'px'"
        [attr.height]="data.details.foa_stats.height + 'px'">
        <g *ngFor="let item of data.details.foa_stats.items">
          <circle
            [attr.cx]="item.label_x + 15"
            [attr.cy]="item.label_y + 20"
            r="3"
          ></circle>
          <path 
            [attr.d]="path(item)"></path>
          <circle class="main"
            [attr.cx]="item.x"
            [attr.cy]="item.y"
            [attr.r]="item.r"
            (click)="onNavigate(activityReport(item.label))"
          ></circle>
        </g>
    </svg>
    <div *ngFor="let item of data.details.foa_stats.items"
      class="circles-label"
      [style.left]="(item.label_x - 70) + 'px'"
      [style.top]="item.label_y + 'px'">
      <a [href]="activityReport(item.label)">
        <strong>{{ item.label }}</strong>
      </a><br/>
      <span>ארגונים: </span>
      <span class="count">{{ item.num }}</span>
    </div>
  </div>
  <div>
    <a class="btn btn-primary btn-lg"
      [href]="'https://next.obudget.org/s/?theme=socialmap&dd=field-of-activity-reports&q=ארגונים+הפעילים+בתחום'">
      חפשו ארגונים פעילים בתחומים נוספים
    </a>
  </div>
</div>
`,
})
export class HadashChart {

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
