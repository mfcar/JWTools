import {Component} from '@angular/core';
import * as jose from 'jose'
import {Clipboard} from '@angular/cdk/clipboard';
import {MatSnackBar} from "@angular/material/snack-bar";

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
    decodedHeader: string | undefined;
    decodedPayload: string | undefined;

    constructor(private clipboard: Clipboard, private _snackBar: MatSnackBar) {
    }

    onEncodedTokenChanged(value: any): void {
        this.actualToken = value;

        this.decodedHeader = JSON.stringify(jose.decodeProtectedHeader(this.actualToken), null, 2);
        this.decodedPayload = JSON.stringify(jose.decodeJwt(this.actualToken), null, 2);
    }

    // onDecodedHeaderChanged(value: any): void {
    //
    //
    //   this.decodedHeader = JSON.stringify(jose.decodeProtectedHeader(this.actualToken), null, 2);
    //   this.decodedPayload = JSON.stringify(jose.decodeJwt(this.actualToken), null, 2);
    // }
    //
    // onDecodedPayloadChanged(value: any): void {
    //   this.actualToken = value;
    //
    //   this.decodedHeader = JSON.stringify(jose.decodeProtectedHeader(this.actualToken), null, 2);
    //   this.decodedPayload = JSON.stringify(jose.decodeJwt(this.actualToken), null, 2);
    // }
    //
    // async signToken(header: string, payload: string): Promise<string> {
    //   return await new jose.CompactSign(new TextEncoder().encode(this.decodedPayload)).setProtectedHeader({ alg: 'ES256' }).sign();
    // }

    onCopyValue(editorName: string, value: string | undefined): void {
        let textToCopy = '';
        if (value) {
            textToCopy = value;
        }

        this.clipboard.copy(textToCopy);
        this._snackBar.open(`${editorName} copied to clipboard`, 'OK', {
            duration: 2000,
            horizontalPosition: 'center',
            verticalPosition: 'top'
        });
    }
}
