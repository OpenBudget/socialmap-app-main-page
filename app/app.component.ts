import {Component, AfterViewInit, ViewChild, ElementRef} from '@angular/core';

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
               [ngClass]="{displayed: cur_image==0}">
               בקורס מכונאות אופניים.<br/>
               המכללה - בית ספר חברתי למען נשים חוזרות למעגל העבודה<br/>
               צילום: איריס שטרן לוי
          </p>
          <p class="image-credit" 
               [ngClass]="{displayed: cur_image==1}">
               מחאת האימוץ, 2017.<br/>
               צילום: האגודה למען הלהט"ב
          </p>
          <p class="image-credit" 
               [ngClass]="{displayed: cur_image==2}">
               מצעד האקלים 2018.<br/>
               צילום: עמותת חיים וסביבה
          </p>
        </div>
        <div class="main-text">
          <h1>אז מה קורה במגזר השלישי?!</h1>
          <budgetkey-search-bar [searchTerm]="''"
                                [instantSearch]="false"
                                (navigate)="onNavigate($event)"
          ></budgetkey-search-bar>
          <div class="search-guide" #searchGuide>
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
          <div class="subtitle">
            <strong>״המפה החברתית״</strong>
            הינו מיזם חדשני ליצירת בסיס נתונים ראשון מסוגו, המאפשר לציבור הרחב לקבל תמונה רחבה ומקיפה
            על הארגונים והעמותות הפועלים בישראל ועל מידת המעורבות והתמיכה הממשלתית בפעילותם          
          </div>
        </div>
        <div class="tab-buttons"
            [style.margin-top]="spacer + 'px'">
          <div class="subtitle"  #tabButtons>
            <strong>״המפה החברתית״</strong>
            הינו מיזם חדשני ליצירת בסיס נתונים ראשון מסוגו, המאפשר לציבור הרחב לקבל תמונה רחבה ומקיפה
            על הארגונים והעמותות הפועלים בישראל ועל מידת המעורבות והתמיכה הממשלתית בפעילותם          
          </div>
          <div class="tab-button" (click)="active='flag'"
               [ngClass]="{active: active=='flag'}"
          >
            <flag-anchor [data]='data'></flag-anchor>
          </div>
          <div class="tab-button" (click)="active='hadash'"
               [ngClass]="{active: active=='hadash'}"
          >
            <hadash-anchor [data]='data'></hadash-anchor>
          </div>
          <div class="tab-button" (click)="active='coins'"
               [ngClass]="{active: active=='coins'}"
          >
            <coins-anchor [data]='data'></coins-anchor>
          </div>        
        </div>
        <div [style.height]="(spacer + 20) + 'px'"></div>
        <div class="tab-contents-container"
             *ngIf="active=='hadash'">
             <hadash-chart [data]='data'></hadash-chart>
        </div>
        <div class="tab-contents-container"
             *ngIf="active=='flag'">
            <flag-chart [data]='data'></flag-chart>
        </div>
        <div class="tab-contents-container"
             *ngIf="active=='coins'">
             <coins-chart [data]='data'></coins-chart>
        </div>
        <div class='mobile-tabs'>
          <mobile-tab>
            <hadash-anchor class='anchor' [data]='data'></hadash-anchor>
            <hadash-chart-simple [data]='data'></hadash-chart-simple>
          </mobile-tab>
          <mobile-tab>
            <coins-anchor class='anchor' [data]='data'></coins-anchor>
            <coins-chart-simple [data]='data'></coins-chart-simple>
          </mobile-tab>
          <mobile-tab>
            <flag-anchor class='anchor' [data]='data'></flag-anchor>
            <flag-chart [data]='data'></flag-chart>
          </mobile-tab>
        </div>
        <div class="disclaimer">
          הנתונים מבוססים על שנת הדיווח האחרונה של 
          <span [bkTooltip]="'ארגון מוגדר כפעיל אם הוצג עבורו דיווח שנתי באתר ״גיידסטאר״ באחת משלוש השנים האחרונות'"
          >הארגונים הפעילים</span>   
          ולכן מוצגים לצורך הבנת סדרי הגודל
        </div>


      </budgetkey-container>
  `,
})
export class AppComponent implements AfterViewInit{

  @ViewChild('tabButtons') tabButtons: ElementRef;
  @ViewChild('searchGuide') searchGuide: ElementRef;

  private active: string = 'hadash';
  private data: any = window['prefetchedData'];
  private districts: any[] = [];
  private selected: string;
  private spacer = 0;
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

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
    let guideBottom = this.searchGuide.nativeElement.getBoundingClientRect().bottom;
    let subtitleTop = this.tabButtons.nativeElement.getBoundingClientRect().top;
    if (guideBottom > subtitleTop) {
      window.setTimeout(() => {
        this.spacer = guideBottom - subtitleTop + 20;
      }, 0);
    }
    console.log(guideBottom, subtitleTop, this.spacer);
  }

  onNavigate(url: string) {
    window.location.href = url;
  }

}
