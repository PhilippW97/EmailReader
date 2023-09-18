import { Component, OnInit } from '@angular/core';
import { Email } from '../interfaces/email';

@Component({
  selector: 'app-email-reader-basic',
  templateUrl: './email-reader-basic.component.html',
  styleUrls: ['./email-reader-basic.component.css'],
})
export class EmailReaderBasicComponent implements OnInit {
  mail!: Email;

  constructor() {}

  ngOnInit(): void {
    this.mail = {
      from: '',
      to: '',
      subject: '',
      body: '',
    };
  }

  send(): void {
    console.log('send button pressed');
    window.alert(
      this.mail.from +
        ' ' +
        this.mail.to +
        ' ' +
        this.mail.subject +
        ' ' +
        this.mail.body
    );
    this.mail = {
      from: '',
      to: '',
      subject: '',
      body: '',
    };
  }

  clean(): void {
    console.log('clean button pressed');
    this.mail = {
      from: '',
      to: '',
      subject: '',
      body: '',
    };
  }
}
