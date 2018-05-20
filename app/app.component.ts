import {Component} from '@angular/core';

let map = require('./map.svg.html');

@Component({
  selector: 'my-app',
  template: ` 
      <budgetkey-container [showHeader]="true" [showSearchBar]="false">
        <div class='background-graphic'>
          <img src="assets/img/bg1.jpg" 
               [ngClass]="{displayed: cur_image==0}"/>
          <img [src]="img_src_1" 
               [ngClass]="{displayed: cur_image==1}"/>
          <img [src]="img_src_2" 
               [ngClass]="{displayed: cur_image==2}"/>>
          <p class="image-credit" 
               [ngClass]="{displayed: cur_image>=0}">
               תמונה לדוגמה<br/>
               קרדיט: ארגון לדוגמה
          </p>

        </div>
        <div class="main-text">
          <h1>אז מה קורה במגזר השלישי!?</h1>
          <budgetkey-search-bar [searchTerm]="''"
                                [instantSearch]="false"
                                (navigate)="onNavigate($event)"
          ></budgetkey-search-bar>
          <div class="search-guide">
            <img src="assets/img/down-left-arrow.svg"/>
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
          <div class="subtitle">
            <strong>״המפה החברתית״</strong>
            הינו מיזם חדשני ליצירת בסיס נתונים ראשון מסוגו, המאפשר לציבור הרחב לקבל תמונה רחבה ומקיפה
            על הארגונים והעמותות הפועלים בישראל ועל מידת המעורבות והתמיכה הממשלתית בפעילותם          
          </div>
          <div class="tab-button" (click)="active='flag'"
               [ngClass]="{active: active=='flag'}"
          >
            <img class="tab-icon" src="assets/img/icon-flag.svg"/> 
            <div class="text">
            ארגוני המגזר השלישי מדווחים על פעילות ב-<strong>{{ data.details.total_active_cities }}</strong> ישובים בשלוש השנים האחרונות 
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
            <img class="tab-icon" src="assets/img/icon-coins.svg"/> 
            <div class="text">
              בשלוש השנים האחרונות דווחו 
              <strong>{{ data.details.total_received.toLocaleString('en-US', {style: 'decimal', maximumFractionDigits: 0}) }} ₪</strong>
               העברות מכספי ממשלה לארגונים            
            </div>
          </div>        
        </div>
        <div class="tab-contents-container"
             *ngIf="active=='hadash'">
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
              [href]="'https://next.obudget.org/s/?theme=socialmap&dd=reports&q=ארגונים+הפעילים+בתחום'">
              חפשו ארגונים פעילים בתחומים נוספים
            </a>
          </div>
        </div>
        <div class="tab-contents-container"
             *ngIf="active=='flag'">
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
                        <span class="foas col-xs-12">תחומי פעילות בולטים: {{ di.foas.join(', ') }}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  ` + map + `
                </div>             
             </div>
        </div>
        <div class="tab-contents-container"
             *ngIf="active=='coins'">
             <budgetkey-chart-adamkey [data]="data.charts[0].chart"></budgetkey-chart-adamkey>
        </div>
        <div class="disclaimer">
          הנתונים מבוססים על שנת הדיווח האחרונה של הארגונים הפעילים ולכן מוצגים לצורך הבנת סדרי הגודל
        </div>
      </budgetkey-container>
  `,
})
export class AppComponent {

  private active: string = 'hadash';
  private data: any = window['prefetchedData'];
  private districts: any[] = [];
  private selected: string;
  private cur_image = 0;
  private img_src_1 = '';
  private img_src_2 = '';
  private searchTypes = [
    {
      name: 'עמותות וחל״צ',
      id: 'entities',
    },
    {
      name: 'מחוזות',
      id: 'reports',
    },
    {
      name: 'תחומי פעילות',
      id: 'reports',
    }
  ];

  constructor() {
    for (let d of Object.keys(this.data.details.district_totals)) {
      console.log(d);
      let di = this.data.details.district_totals[d];
      di.name = d;
      this.districts.push(di);
    }
    this.districts.sort((a, b) => b.totals - a.totals);
    console.log(this.districts);
  }

  path(item: any) {
    let w = this.data.details.foa_stats.width;
    return `M${item.label_x + 15},${item.label_y + 20} 
    L${item.label_x + 45},${item.label_y + 20}
    L${item.x},${item.y}
`;
  }

  ngOnInit() {
    window.setInterval(() => {
      this.cur_image += 1;
      this.cur_image %= 3;
    }, 7000);
    window.setTimeout(() => {
      this.img_src_1 = 'assets/img/bg2.jpg';
      this.img_src_2 = 'assets/img/bg3.jpg';
    }, 3000);
  }

  activityReport(name: string) {
    return 'https://next.obudget.org/i/reports/ngo-activity-report/' +
      name + '?theme=socialmap';
  }

  onNavigate(url: string) {
    window.location.href = url;
  }
}
