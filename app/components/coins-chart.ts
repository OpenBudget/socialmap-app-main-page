import {Component, Input} from '@angular/core';

@Component({
  selector: 'coins-chart',
  template: ` 
  <div class='tab-container'>
    <budgetkey-chart-adamkey [data]="data.charts[0].chart"></budgetkey-chart-adamkey>
  </div>
`,
})
export class CoinsChart {

  @Input() data: any;

  constructor() {
  }

}
