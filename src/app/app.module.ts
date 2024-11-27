import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FormDialogComponent } from './components/form-dialog/body.component';

import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { TestComponent } from './components/test/test.component';

import { NgxEditorModule } from 'ngx-editor';

import { ThemePalette } from '@angular/material/core';
import { NgFor } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';

import {MatDialog, MatDialogModule} from '@angular/material/dialog';

import { NgIf } from '@angular/common';
import { MainFeedComponent } from './components/main-feed/main-feed.component';
import {MatCardModule} from '@angular/material/card';



import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { SingleViewComponent } from './components/single-view/single-view.component';
import { CookieService } from 'ngx-cookie-service';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormDialogComponent,
    TestComponent,
    MainFeedComponent,
    SingleViewComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    NgbModule,
    MatSelectModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatCheckboxModule,
    NgFor,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    NgIf,
    MatDialogModule,
    HttpClientModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    NgxEditorModule
    
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
