import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AdamkeyModule } from 'adamkey';
import { BudgetKeyCommonModule, THEME_TOKEN } from 'budgetkey-ng2-components';
import { APP_BASE_HREF } from '@angular/common';
import { getAuthServiceConfigProvider } from 'budgetkey-ng2-auth';
import { FlagAnchorComponent } from './flag-anchor/flag-anchor.component';
import { HadashAnchorComponent } from './hadash-anchor/hadash-anchor.component';
import { CoinsAnchorComponent } from './coins-anchor/coins-anchor.component';
import { FlagChartComponent } from './flag-chart/flag-chart.component';
import { HadashChartComponent } from './hadash-chart/hadash-chart.component';
import { CoinsChartComponent } from './coins-chart/coins-chart.component';
import { HadashChartSimpleComponent } from './hadash-chart-simple/hadash-chart-simple.component';
import { MobileTabComponent } from './mobile-tab/mobile-tab.component';
import { CoinsChartSimpleComponent } from './coins-chart-simple/coins-chart-simple.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        AdamkeyModule,
        BudgetKeyCommonModule,
      ],
      declarations: [
        FlagAnchorComponent,
        HadashAnchorComponent,
        CoinsAnchorComponent,
        FlagChartComponent,
        HadashChartComponent,
        CoinsChartComponent,
        HadashChartSimpleComponent,
        MobileTabComponent,
        CoinsChartSimpleComponent,
        AppComponent
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/'},
        {provide: THEME_TOKEN, useValue: {}},
        getAuthServiceConfigProvider('https://next.obudget.org'),
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

});
