import {Component, Input} from '@angular/core';

@Component({
  selector: 'hadash-chart-simple',
  template: ` 
  <div class='tab-container'>
    <ng-container *ngFor='let item of data.details.foa_stats.items'>
      <div class='item'>
        <span class='foa'>
          <a [href]='"https://next.obudget.org/i/reports/ngo-activity-report/" + item.label + "?theme=socialmap"'>
            {{item.label}}
          </a>
        </span>
        <div class='amount-container'>
          <span class='amount' [style.width]='(100 * item.num / max) + "%"'>{{item.num.toLocaleString()}}</span>
        </div>
      </div>
      <div class='item'>
        <div class='filler'>
        </div>
      </div>
    </ng-container>
    <div class='more'>
      <a class="btn btn-primary btn-lg"
        [href]="'https://next.obudget.org/s/?theme=socialmap&dd=field-of-activity-reports&q=ארגונים+הפעילים+בתחום'">
        חפשו ארגונים פעילים בתחומים נוספים
      </a>
    </div>
  </div>
`,
  styles: [`
  :host {
    width: 100%;
    margin: 40px 0;
  }

  .item {
    display: flex;
    flex-flow: row;
    align-items: center;
    padding: 0px 30px;
    width: 100%;
  }

  .more {
    margin-top: 30px;

    a {
      background-color: #5A32D1;
    }
  }
  
  .foa {
    color: #5A32D1;	
    font-family: "Abraham TRIAL";	
    font-size: 14px;
    font-weight: bold;
  }

  .amount-container {
    margin-right: auto;
    width: 60%;
    border-right: solid 1px #b7b7b7;
    height: 30px;
  }

  .amount {
    display: inline-block;
    line-height: 30px;
    vertical-align: middle;
    color: #3E4E59;	font-family: "Miriam Libre";	font-size: 14px;
    background-color: #FFCAB6;
    padding-right: 10px
  }

  .filler {
    margin-right: auto;
    width: 60%;
    display: inline-block;
    height: 30px;
    border-right: solid 1px #b7b7b7;
  }
  `]
})
export class HadashChartSimple {

  @Input() data: any;
  private max = 1;

  constructor() {
  }

  ngOnInit() {
    this.max = this.data.details.foa_stats.items[0].num * 1.1;
  }

}
