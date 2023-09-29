import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Components
import { EmailReaderBasicComponent } from './modules/email-reader-basic/email-reader-basic.component';
import { EmailReaderFormComponent } from './modules/email-reader-form/email-reader-form.component';
import { EmailsFormComponent } from './components/emails-form/emails-form.component';
import { EmailsViewerComponent } from './components/emails-viewer/emails-viewer.component';
import { EmailsListComponent } from './components/emails-list/emails-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/mails', pathMatch: 'full' },
  { path: 'exercise1', component: EmailReaderBasicComponent },
  { path: 'exercise2', component: EmailReaderFormComponent },
  { path: 'mails', component: EmailsListComponent },
  { path: 'mails/:id', component: EmailsViewerComponent },
  { path: 'newMail', component: EmailsFormComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
