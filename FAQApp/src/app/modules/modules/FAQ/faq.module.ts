import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { FAQRoutingModule } from './faq-routing.module';
import { FAQComponent } from './views/faq/faq.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [FAQComponent, AccordionComponent],
  imports: [
    CommonModule,
    FAQRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  exports: [
    FAQComponent,
    AccordionComponent
  ]
})
export class FAQModule { }
