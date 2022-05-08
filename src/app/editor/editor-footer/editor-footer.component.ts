import { Component } from '@angular/core';
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-editor-footer',
  templateUrl: './editor-footer.component.html',
  styleUrls: ['./editor-footer.component.scss']
})
export class EditorFooterComponent {
  version = environment.versionNumber

  constructor() { }

}
