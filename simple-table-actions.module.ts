import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNGModule } from './prime-ng.module';

import { SimpleTableActionsComponent } from './simple-table-actions.component';
import { CotrafaTemplateDirective } from './simple-table-actions-sections.directive';

@NgModule({
  declarations: [
    SimpleTableActionsComponent,
    CotrafaTemplateDirective
  ],
  imports: [
    PrimeNGModule,
    CommonModule
  ],
  exports: [
    SimpleTableActionsComponent,
    CotrafaTemplateDirective
  ]
})
export class SimpleTableActionsModule { }
