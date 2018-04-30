import {Component, ViewChild} from '@angular/core';

@Component({
  selector: 'my-app',
  template: ` 
      <budgetkey-container [showHeader]="true" [showSearchBar]="false">
        <div class='background-graphic'>
          <img src="assets/img/bg1.jpg"/>
        </div>
        <div class="main-text">
          <h1>אז מה באמת קורה במגזר השלישי!?</h1>
          <input class="input" type="text"/>
          <div class="search-guide">
            <img src="assets/img/down-left-arrow.png"/>
            <div class="search-examples">
              <div>חיפושים לדוגמה</div>
              <div class="tags">
                <span class="tag">ארגונים פעילים בתחום התרבות והאמנות</span>
                <span class="tag">ארגונים הפעילים במחוז הדרום</span>
                <span class="tag">״המרכז לעיוור בישראל״</span>
              </div>
            </div>
          </div>
        </div>
        <div class="tab-buttons">
          <div class="tab-button" (click)="active='flag'"
               [ngClass]="{active: active=='flag'}"
          >
            <img class="tab-icon" src="assets/img/icon-flag.svg"/> 
            <div class="text">
              ארגונים אלו מדווחים על פעילות ב-<strong>{{ data.details.total_active_cities }}</strong> ישובים בשלוש השנים האחרונות 
            </div>
          </div>
          <div class="tab-button" (click)="active='hadash'"
               [ngClass]="{active: active=='hadash'}"
          >
            <img class="tab-icon" src="assets/img/icon-hadash.svg"/> 
            <div class="text">
              <strong>{{ data.details.total_active_orgs }}</strong>
               ארגונים פעילים בישראל ב-{{ data.details.total_active_foas }}
               תחומים בשלוש השנים האחרונות
            </div>
          </div>
          <div class="tab-button" (click)="active='coins'"
               [ngClass]="{active: active=='coins'}"
          >
            <img class="tab-icon" src="assets/img/icon-flag.svg"/> 
            <div class="text">
              בשלוש השנים האחרונות דווחו 
              <strong>{{ data.details.total_received.toLocaleString('en-US', {style: 'decimal', maximumFractionDigits: 2}) }} ₪</strong>
               העברות מכספי ממשלה לארגונים            
            </div>
          </div>        
        </div>
      </budgetkey-container>
  `,
})
export class AppComponent {

  private active: string = 'hadash';
  private data: any = window['prefetchedData'];

  constructor() {
  }
}
