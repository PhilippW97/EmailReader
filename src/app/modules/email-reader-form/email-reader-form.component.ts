import { Component, OnInit, ViewChild } from '@angular/core';
import { Email } from '../interfaces/email';

@Component({
  selector: 'app-email-reader-form',
  templateUrl: './email-reader-form.component.html',
  styleUrls: ['./email-reader-form.component.css'],
})
export class EmailReaderFormComponent implements OnInit {
  mail!: Email;
  mailList!: Email[];
  uniqueIdCounter: number = 1;

  @ViewChild('mailForm') mailForm: any;

  constructor() {
    this.mailList = [];
  }

  ngOnInit(): void {
    this.mail = {
      id: 0,
      from: '',
      to: '',
      subject: '',
      body: '',
    };
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
    this.addMail(email);
    this.generateUniqueId();
    this.mailForm.reset();
  }

  cleanForm(): void {
    this.mailForm.reset();
  }

  // Method to add an entry to the mailList
  addMail(email: Email) {
    this.mailList.push(email);
  }

  removeEmail(id: Number) {
    console.log('remove Email presssed');
    console.log(id);
  }
}
