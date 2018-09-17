import {Component, Input} from '@angular/core';

@Component({
  selector: 'coins-anchor',
  template: ` 
  <div class='anchor'>
    <img class="tab-icon" src="assets/img/icon-coins.svg"/> 
    <div class="text">
      בשלוש השנים האחרונות דווחו 
      <strong>{{ data.details.total_received.toLocaleString('en-US', {style: 'decimal', maximumFractionDigits: 0}) }} ₪</strong>
      העברות מכספי ממשלה לארגונים            
    </div>
  </div>
  `,
})
export class CoinsAnchor {

  @Input() data: any;

  constructor() {
  }

}
