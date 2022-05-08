import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertJwtCredentialWarningComponent } from './alert-jwt-credential-warning.component';

describe('AlertJwtCredentialWarningComponent', () => {
  let component: AlertJwtCredentialWarningComponent;
  let fixture: ComponentFixture<AlertJwtCredentialWarningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertJwtCredentialWarningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertJwtCredentialWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
