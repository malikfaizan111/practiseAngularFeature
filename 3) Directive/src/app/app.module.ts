import { AppBasicHighlight } from './basic-highlight/basic-highlight.directive';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BetterHighlightDirective } from './basic-highlight/better-highlight.directive';
import { TotalLearnerDirective } from './basic-highlight/total-learner.directive';
import { UnlessDirective } from './unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    AppBasicHighlight,
    BetterHighlightDirective,
    TotalLearnerDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
