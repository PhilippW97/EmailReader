import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailsViewerComponent } from './emails-viewer.component';

describe('EmailsViewerComponent', () => {
  let component: EmailsViewerComponent;
  let fixture: ComponentFixture<EmailsViewerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmailsViewerComponent]
    });
    fixture = TestBed.createComponent(EmailsViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
