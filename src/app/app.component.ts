import { Component, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit, AfterViewInit {

  @ViewChild('tabButtons') tabButtons: ElementRef;
  @ViewChild('searchGuide') searchGuide: ElementRef;

  private active = 'hadash';
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
    const guideBottom = this.searchGuide.nativeElement.getBoundingClientRect().bottom;
    const subtitleTop = this.tabButtons.nativeElement.getBoundingClientRect().top;
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
