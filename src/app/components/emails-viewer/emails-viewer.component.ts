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
  mailId!: number;

  @ViewChild('mailForm') mailForm: any;

  constructor(
    private emailService: EmailServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      // this.mailId = params.get('id') ?? 'DefaultMailId';
      const id = +params.get('id')! || this.mailId;
      this.mail = this.emailService.getMailById(id);
    });
  }
}
