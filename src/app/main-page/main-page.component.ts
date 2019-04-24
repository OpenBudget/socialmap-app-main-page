import { Component, OnInit, ElementRef, AfterViewInit, ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.less']
})
export class MainPageComponent implements OnInit, AfterViewInit {

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
  initialQuery: string;
  adVisible = false;

  constructor() {
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    this.adVisible = window.scrollY < 30;
  }

  ngOnInit() {
    window.setTimeout(() => {
      this.adVisible = true;
    }, 0);
    this.initialQuery = (new URLSearchParams(window.location.search.slice(1))).get('q') || '';
    window.setInterval(() => {
      this.cur_image += 1;
      this.cur_image %= 3;
    }, 7000);
    window.setTimeout(() => {
      this.img_src_1 = 'assets/img/bg2.jpg';
      this.img_src_2 = 'assets/img/bg3.jpg';
    }, 3000);
  }

  updateTerm(term) {
    const params = new URLSearchParams(window.location.search.slice(1));
    params.set('q', term);
    history.replaceState(
      null,
      document.title,
      document.location.href.split('?')[0] + '?' + params.toString()
    );
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
