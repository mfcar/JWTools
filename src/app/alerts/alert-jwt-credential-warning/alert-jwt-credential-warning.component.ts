import { Component, OnInit } from '@angular/core';
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-alert-jwt-credential-warning',
  templateUrl: './alert-jwt-credential-warning.component.html',
  styleUrls: ['./alert-jwt-credential-warning.component.scss']
})
export class AlertJwtCredentialWarningComponent {
  gitHubUrl = environment.gitHubLink;
}
