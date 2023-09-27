import { Component, OnInit, ViewChild } from '@angular/core';
import { Email } from '../interfaces/email';
import { EmailServiceService } from 'src/app/services/email-service.service';

@Component({
  selector: 'app-email-reader-form',
  templateUrl: './email-reader-form.component.html',
  styleUrls: ['./email-reader-form.component.css'],
})
export class EmailReaderFormComponent implements OnInit {
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

  generateUniqueId(): number {
    return this.uniqueIdCounter++;
  }

  sendForm(): void {
    window.alert(
      `The email from ${this.mail.from} has been sent to ${this.mail.to}`
    );

    // create new mail object and add it to the mailList
    const email: Email = {
      id: this.uniqueIdCounter,
      from: this.mail.from,
      to: this.mail.to,
      subject: this.mail.subject,
      body: this.mail.body,
    };
    this.emailService.addEmail(email);
    this.generateUniqueId();
    this.mailForm.reset();
  }

  cleanForm(): void {
    this.mailForm.reset();
  }

  removeEmail(id: Number): void {
    this.mailList = this.emailService.deleteEmail(id);
  }
}
