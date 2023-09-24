import { AppComponent } from './../../app.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Email } from '../interfaces/email';

@Component({
  selector: 'app-email-reader-basic',
  templateUrl: './email-reader-basic.component.html',
  styleUrls: ['./email-reader-basic.component.css'],
})
export class EmailReaderBasicComponent implements OnInit {
  mail!: Email;
  mailList!: Email[];

  @ViewChild('mailForm') mailForm: any;

  constructor() {
    this.mailList = [];
  }

  ngOnInit(): void {
    this.mail = {
      from: '',
      to: '',
      subject: '',
      body: '',
    };
  }

  sendForm(): void {
    window.alert(
      `The email from ${this.mail.from} has been sent to ${this.mail.to}`
    );

    // create new mail object and add it to the mailList
    const email: Email = {
      from: this.mail.from,
      to: this.mail.to,
      subject: this.mail.subject,
      body: this.mail.body,
    };
    this.addMail(email);
    this.mailForm.reset();
  }

  cleanForm(): void {
    this.mailForm.reset();
  }

  // Method to add an entry to the mailList
  addMail(email: Email) {
    this.mailList.push(email);
  }
}
