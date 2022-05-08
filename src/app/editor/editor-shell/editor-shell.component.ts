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
  originalToken = '';
  actualToken = '';
  decodedHeader: string | object | undefined;
  decodePayload: JWTPayload | undefined;

  constructor() {
  }

  onCodeChanged(value: any): void {
    this.actualToken = value;

    this.decodedHeader = jose.decodeProtectedHeader(this.actualToken);
    this.decodePayload = jose.decodeJwt(this.actualToken);
  }
}
