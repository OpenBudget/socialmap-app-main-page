import {Component, Input} from '@angular/core';

let map = require('./map.svg.html');

@Component({
  selector: 'flag-chart',
  template: ` 
  <div class='tab-container'>
    <div class="row">
      <div class="col-md-6">
        <div class="district-list"
            (mouseout)="selected = null">
          <div class="district" 
              *ngFor="let di of districts"
              (mouseover)="selected = di.name">
            <div class="row">
              <span class="name col-xs-6">
                <a [href]="'https://next.obudget.org/i/reports/ngo-district-report/' + di.name + '?theme=socialmap'">
                  מחוז {{ di.name }}
                </a>
              </span>
              <span class="amount col-xs-6">{{ di.totals }} ארגונים פעילים</span>
            </div>
            <div class="row">
              <span class="foas col-xs-12">
                תחומי פעילות 
                <span [bkTooltip]="'תחומים בהם דווחה פעילות באזור בשיעור גבוה יחסית לאזורים האחרים'">
                  בולטים
                </span>
                : {{ di.foas.join(', ') }}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="map col-md-6">
        ` + map + `
      </div>             
    </div>
  </div>
`,
})
export class FlagChart {

  @Input() data: any;
  private districts: any[] = [];

  constructor() {
  }

  ngOnInit() {
    for (let d of Object.keys(this.data.details.district_totals)) {
      console.log(d);
      let di = this.data.details.district_totals[d];
      di.name = d;
      this.districts.push(di);
    }
    this.districts.sort((a, b) => b.totals - a.totals);
    console.log(this.districts);
  }

}
