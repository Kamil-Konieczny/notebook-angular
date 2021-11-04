import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NicknameInputComponent } from './nickname-input/nickname-input.component';
import {MatButtonModule} from "@angular/material/button";
import {MatFormField} from "@angular/material/form-field";
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import {AppRoutingModule} from "./app-routing-module";
import { NavigationComponent } from './navigation/navigation.component';
import {HttpClientModule} from "@angular/common/http";
import { NoteComponent } from './note/note.component';
import { NoteViewComponent } from './note/note-view/note-view.component';
import { AddDialogComponent } from './navigation/add-dialog/add-dialog.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NicknameInputComponent,
    NavigationComponent,
    NoteComponent,
    NoteViewComponent,
    AddDialogComponent
  ],
  imports: [
    TooltipModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule

  ],
  providers: [
    [AddDialogComponent]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
