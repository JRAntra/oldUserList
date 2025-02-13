import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputFormComponent } from './users/input-form/input-form.component';
import { UserTableComponent } from './users/user-table/user-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  HttpClientModule,
  provideHttpClient,
  withFetch,
} from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, InputFormComponent, UserTableComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  // providers: [provideHttpClient(withFetch())],
  bootstrap: [AppComponent],
})
export class AppModule {}
