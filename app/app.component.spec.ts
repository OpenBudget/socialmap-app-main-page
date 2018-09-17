import 'karma-test-shim';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BudgetKeyCommonModule } from 'budgetkey-ng2-components';
import { AppComponent } from './app.component';
import { AdamkeyModule } from 'adamkey';
import { CoinsAnchor, HadashAnchor, FlagAnchor, FlagChart, HadashChart, CoinsChart, MobileTab, CoinsChartSimple, HadashChartSimple } from './components';

window['prefetchedData'] = require('../data/ngos-main-page.json')['value'];

describe('AppComponent', function () {
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    return TestBed.configureTestingModule({
      imports: [
        HttpModule,
        FormsModule,
        AdamkeyModule,
        BudgetKeyCommonModule,
      ],
      declarations: [
        AppComponent,
        FlagAnchor,
        HadashAnchor,
        CoinsAnchor,
        FlagChart,
        HadashChart,
        HadashChartSimple,
        CoinsChart,
        CoinsChartSimple,        
        MobileTab,
      ],
      providers: [
      ]
    })
    .compileComponents()
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
  });

  it('should create component', () => expect(comp).toBeDefined() );

});
