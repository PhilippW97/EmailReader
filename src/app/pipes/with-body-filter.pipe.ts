import { Pipe, PipeTransform } from '@angular/core';
import { Email } from '../modules/interfaces/email';

@Pipe({
  name: 'withBodyFilter',
})
export class WithBodyFilterPipe implements PipeTransform {
  transform(allEmails: Email[], withBody: boolean): Email[] {
    if (withBody) return allEmails.filter((email) => email.body != '');
    else return allEmails;
  }
}
