import {Component, Input} from '@angular/core';

@Component({
  selector: 'coins-chart-simple',
  template: ` 
  <div class='tab-container'>
    <div class='item' *ngFor='let item of data.charts[0].chart.values'>
      <span class='ministry'>{{item.label}}</span>
      <span class='amount'>{{item.amount_fmt}}</span>
    </div>
  </div>
`,
  styles: [`
  .item {
    display: flex;
    flex-flow: row;
    align-items: center;
    padding: 22px 30px;
    width: 100%;
  }

  .ministry {
    color: #5A32D1;	font-family: "Abraham TRIAL";	font-size: 14px;
  }

  .amount {
    color: #3E4E59;	font-family: "Miriam Libre";	font-size: 14px;
    margin-right: auto;
  }
  `]
})
export class CoinsChartSimple {

  @Input() data: any;

  constructor() {
  }

}
