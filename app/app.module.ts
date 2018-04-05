import './rxjs-extensions';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { BudgetKeyCommonModule, THEME_TOKEN as NG_COMPONENTS_THEME_TOKEN } from 'budgetkey-ng2-components';

import { AppComponent }  from './app.component';
import {
  SummaryComponent, MapVisualizationComponent,
  CategoryVisualizationComponent, CategoryVisualizationInfoPopupComponent,
  HeroComponent
} from './components';

import { BudgetKeyMainPageService, UtilsService } from './services';

import { KeysPipe } from './pipes';

import { MAPBOXGL_TOKEN, MAPBOXGL_ACCESS_TOKEN } from './constants';
import {MushonkeyModule} from "mushonkey";

/* global mapboxgl */
declare const mapboxgl: any;

mapboxgl.accessToken = MAPBOXGL_ACCESS_TOKEN;

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    BudgetKeyCommonModule,
    MushonkeyModule
  ],
  declarations: [
    KeysPipe,
    AppComponent,
    SummaryComponent,
    MapVisualizationComponent,
    CategoryVisualizationComponent,
    CategoryVisualizationInfoPopupComponent,
    HeroComponent
  ],
  providers: [
    BudgetKeyMainPageService,
    UtilsService,
    {provide: MAPBOXGL_TOKEN, useValue: mapboxgl},
    {
      provide: NG_COMPONENTS_THEME_TOKEN, useValue: {
        'themeId': 'socialmap',
        'siteName': 'המפה החברתית',
        'searchPlaceholder': 'מפה מפה מפה מפה מפה מפה מפה מפה מפה מפה מפה אני מפה'
      }
    }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
