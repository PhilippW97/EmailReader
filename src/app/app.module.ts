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
import { EmailsListComponent } from './components/emails-list/emails-list.component';
import { EmailsFormComponent } from './components/emails-form/emails-form.component';
import { EmailsViewerComponent } from './components/emails-viewer/emails-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    EmailReaderBasicComponent,
    EmailReaderFormComponent,
    FormFieldHighlightDirective,
    WithBodyFilterPipe,
    SearchFilterPipe,
    EmailsListComponent,
    EmailsFormComponent,
    EmailsViewerComponent,
  ],
  imports: [BrowserModule, NgbModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
