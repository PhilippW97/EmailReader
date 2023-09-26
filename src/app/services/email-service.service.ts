import { Email } from './../modules/interfaces/email';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class EmailServiceService {
  constructor() {}
}

@Injectable({ providedIn: 'root' })
export class StudentsService {
  private emailsURL = 'api/emails'; // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  // This invocation captures the error and returns an empty list to
  // the controller when something fails
  getEmails(): Observable<Email[]> {
    return this.http.get<Email[]>(this.emailsURL).pipe(
      tap((res) => console.log('fetched ' + res.length + ' email')),
      catchError(this.handleError<Email[]>('getEmail', []))
    );
  }

  // Example to show how to ignore the error in the server and gives
  // the responsibity to the controller
  getEmail(email: Email): Observable<Email> {
    console.log(`Retreiving information of student: ${email.id}`);
    const url = `${this.emailsURL}/${email.id}`;
    return this.http.get<Email>(url);
  }

  deleteEmail(email: Email): Observable<Email> {
    const id = email.id;
    const url = `${this.emailsURL}/${id}`;
    return this.http.delete<Email>(url, this.httpOptions);
  }

  addEmail(email: Email): Observable<Email> {
    return this.http.post<Email>(this.emailsURL, email, this.httpOptions).pipe(
      tap((email: Email) => console.log(`added email with id=${email.id}`)),
      catchError(this.handleError<Email>('email'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
