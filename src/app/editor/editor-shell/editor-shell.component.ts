import { Component } from '@angular/core';

@Component({
  selector: 'app-editor-shell',
  templateUrl: './editor-shell.component.html',
  styleUrls: ['./editor-shell.component.scss']
})
export class EditorShellComponent {
  canvasName = 'Editor';
  sidebarOpen = false;
  text = '';

  constructor() {
  }

  onCodeChanged(value: any): void {
    this.text = value;
  }
}
