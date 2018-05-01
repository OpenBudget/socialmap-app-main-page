import './rxjs-extensions';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';

import { AdamkeyModule } from 'adamkey';
import { BudgetKeyCommonModule, THEME_TOKEN as NG_COMPONENTS_THEME_TOKEN } from 'budgetkey-ng2-components';


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AdamkeyModule,
    BudgetKeyCommonModule,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [
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
