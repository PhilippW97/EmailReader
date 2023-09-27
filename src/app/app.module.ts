import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EmailReaderBasicComponent } from './modules/email-reader-basic/email-reader-basic.component';
import { FormsModule } from '@angular/forms';
import { EmailReaderFormComponent } from './modules/email-reader-form/email-reader-form.component';
import { AppRoutingModule } from './app-routing.module';
import { FormFieldHighlightDirective } from './modules/directives/form-field-highlight.directive';
import { WithBodyFilterPipe } from './pipes/with-body-filter.pipe';
import { SearchFilterPipe } from './pipes/search-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EmailReaderBasicComponent,
    EmailReaderFormComponent,
    FormFieldHighlightDirective,
    WithBodyFilterPipe,
    SearchFilterPipe,
  ],
  imports: [BrowserModule, NgbModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
