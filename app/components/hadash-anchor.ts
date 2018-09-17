import {Component, Input} from '@angular/core';

@Component({
  selector: 'hadash-anchor',
  template: ` 
  <div class='anchor'>
    <img class="tab-icon" src="assets/img/icon-hadash.svg"/> 
    <div class="text">
      <strong>{{ data.details.total_active_orgs }}</strong>
      ארגונים 
      <span [bkTooltip]="'ארגון מוגדר כפעיל אם הוצג עבורו דיווח שנתי באתר ״גיידסטאר״ באחת משלוש השנים האחרונות'"
      >פעילים</span>   
        בישראל ב-{{ data.details.total_active_foas }}
      תחומים בשלוש השנים האחרונות
    </div>
  </div>
`,
})
export class HadashAnchor {

  @Input() data: any;

  constructor() {
  }

}
