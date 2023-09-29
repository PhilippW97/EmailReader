import { Component, OnInit, ViewChild } from '@angular/core';
import { Email } from '../../modules/interfaces/email';
import { EmailServiceService } from 'src/app/services/email-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-emails-viewer',
  templateUrl: './emails-viewer.component.html',
  styleUrls: ['./emails-viewer.component.css'],
  template: 'Mail ID: {{ mailId }}',
})
export class EmailsViewerComponent implements OnInit {
  mail!: Email;
  mailList!: Email[];
  uniqueIdCounter: number = 6;

  // attributes for pipes
  term!: string;
  withBody!: boolean;
  mailId!: number;

  @ViewChild('mailForm') mailForm: any;

  constructor(
    private emailService: EmailServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.mail = {
    //   id: 0,
    //   from: '',
    //   to: '',
    //   subject: '',
    //   body: '',
    // };
    // Access the variable from the injected service instance
    // this.mailList = this.emailService.emailsList;

    this.route.paramMap.subscribe((params) => {
      // this.mailId = params.get('id') ?? 'DefaultMailId';
      const id = +params.get('id')! || this.mailId;
      this.mail = this.emailService.getMailById(id);
    });
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
}
