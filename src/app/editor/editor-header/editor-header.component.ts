import { Component} from '@angular/core';
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-editor-header',
  templateUrl: './editor-header.component.html',
  styleUrls: ['./editor-header.component.scss']
})
export class EditorHeaderComponent {
  public gitHubLink = environment.gitHubLink;
}
