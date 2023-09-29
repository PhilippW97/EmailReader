// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-emails-list',
//   templateUrl: './emails-list.component.html',
//   styleUrls: ['./emails-list.component.css'],
// })
// export class EmailsListComponent {}

import { Component, OnInit, ViewChild } from '@angular/core';
import { Email } from '../../modules/interfaces/email';
import { EmailServiceService } from 'src/app/services/email-service.service';

@Component({
  selector: 'app-emails-list',
  templateUrl: './emails-list.component.html',
  styleUrls: ['./emails-list.component.css'],
})
export class EmailsListComponent implements OnInit {
  mail!: Email;
  mailList!: Email[];
  uniqueIdCounter: number = 6;

  // attributes for pipes
  term!: string;
  withBody!: boolean;

  @ViewChild('mailForm') mailForm: any;

  constructor(private emailService: EmailServiceService) {}

  ngOnInit(): void {
    this.mail = {
      id: 0,
      from: '',
      to: '',
      subject: '',
      body: '',
    };
    // Access the variable from the injected service instance
    this.mailList = this.emailService.emailsList;
  }

  removeEmail(id: Number): void {
    this.mailList = this.emailService.deleteEmail(id);
  }
  showMailViewer(): void {}

  showMailForm(): void {}
}
