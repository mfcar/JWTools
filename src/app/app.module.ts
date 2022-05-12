import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import { EditorShellComponent } from './editor/editor-shell/editor-shell.component';
import {MatListModule} from "@angular/material/list";
import {MatBottomSheetModule} from "@angular/material/bottom-sheet";
import {MatDialogModule} from "@angular/material/dialog";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatTabsModule} from "@angular/material/tabs";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {ClipboardModule} from "@angular/cdk/clipboard";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { EditorHeaderComponent } from './editor/editor-header/editor-header.component';
import { EditorFooterComponent } from './editor/editor-footer/editor-footer.component';
import {MatGridListModule} from "@angular/material/grid-list";
import { AlertJwtCredentialWarningComponent } from './alerts/alert-jwt-credential-warning/alert-jwt-credential-warning.component';
import {MatChipsModule} from "@angular/material/chips";
import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
  declarations: [
    AppComponent,
    EditorShellComponent,
    EditorHeaderComponent,
    EditorFooterComponent,
    AlertJwtCredentialWarningComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        MatListModule,
        MatIconModule,
        ReactiveFormsModule,
        MatToolbarModule,
        MatInputModule,
        MatDialogModule,
        FormsModule,
        ClipboardModule,
        MatTooltipModule,
        MatCardModule,
        MatSidenavModule,
        MatButtonModule,
        MatSnackBarModule,
        MatBottomSheetModule,
        MatTabsModule,
        MatGridListModule,
        MatChipsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
