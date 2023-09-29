import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailsListComponent } from './emails-list.component';

describe('EmailsListComponent', () => {
  let component: EmailsListComponent;
  let fixture: ComponentFixture<EmailsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmailsListComponent]
    });
    fixture = TestBed.createComponent(EmailsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
