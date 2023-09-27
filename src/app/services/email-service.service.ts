import { Email } from './../modules/interfaces/email';
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({ providedIn: 'root' })
export class EmailServiceService implements InMemoryDbService {
  emailsList!: Email[];
  uniqueIdCounter: number = 1;

  constructor() {
    this.emailsList = this.createDb();
  }

  generateUniqueId(): number {
    return this.uniqueIdCounter++;
  }

  // Inherited from InMemoryDbService
  createDb(): Email[] {
    const emails: Email[] = [
      {
        id: 1,
        from: 'Student 1',
        to: 'email1@upm.es',
        subject: '',
        body: '',
      },
      {
        id: 2,
        from: 'Student 2',
        to: 'email2@upm.es',
        subject: 'asdfasdfasdf',
        body: 'Body1',
      },
      {
        id: 3,
        from: 'Student 3',
        to: 'email3@upm.es',
        subject: '',
        body: '',
      },
      {
        id: 4,
        from: 'Student 4',
        to: 'email4@upm.es',
        subject: '',
        body: '',
      },
      {
        id: 5,
        from: 'Student 5',
        to: 'email5@upm.es',
        subject: 'subject 123',
        body: 'Body2',
      },
    ];
    return emails;
  }

  getEmails(): Email[] {
    return this.emailsList;
  }

  getEmail(id: number): Email | undefined {
    return this.emailsList.find((email) => email.id === id);
  }

  addEmail(email: Email): void {
    this.emailsList.push(email);
  }

  deleteEmail(id: Number): Email[] {
    const newArray = this.emailsList.filter((email) => email.id !== id);
    this.emailsList = newArray;
    return newArray;
  }
}
