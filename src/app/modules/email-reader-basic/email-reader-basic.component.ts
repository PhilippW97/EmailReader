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
      id: 0,
      from: '',
      to: '',
      subject: '',
      body: '',
    };
  }

  send(): void {
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
      id: 0,
      from: '',
      to: '',
      subject: '',
      body: '',
    };
  }

  clean(): void {
    this.mail = {
      id: 0,
      from: '',
      to: '',
      subject: '',
      body: '',
    };
  }
}
