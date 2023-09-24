import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Components
import { EmailReaderBasicComponent } from './modules/email-reader-basic/email-reader-basic.component';
import { EmailReaderFormComponent } from './modules/email-reader-form/email-reader-form.component';

const routes: Routes = [
  { path: 'exercise1', component: EmailReaderBasicComponent },
  { path: 'exercise2', component: EmailReaderFormComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
