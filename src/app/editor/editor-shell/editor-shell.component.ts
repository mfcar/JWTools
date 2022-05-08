import { Component } from '@angular/core';
import * as jose from 'jose'
import {JWTPayload} from "jose";

@Component({
  selector: 'app-editor-shell',
  templateUrl: './editor-shell.component.html',
  styleUrls: ['./editor-shell.component.scss']
})
export class EditorShellComponent {
  canvasName = 'Editor';
  sidebarOpen = false;
  text = '';
  decodedHeader: string | object = '';
  decodePayload: JWTPayload | undefined;

  constructor() {
  }

  onCodeChanged(value: any): void {
    this.text = value;

    this.decodedHeader = jose.decodeProtectedHeader(this.text);
    this.decodePayload = jose.decodeJwt(this.text);
  }
}
