import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { InputFormComponent } from './pages/userlist/input-form/input-form.component';
import { UserTableComponent } from './pages/userlist/user-table/user-table.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    InputFormComponent,
    UserTableComponent,
    LoginComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule, HttpClientModule],
  // providers: [provideHttpClient(withFetch())],
  bootstrap: [AppComponent],
})
export class AppModule {}

/* 

 add form builder, finished vilidator, 

 add httpclient, finished service,

 rename folder

 add router

 create authservie

 create guard
 ng g g guards/auth

 create interceptor
 ng g i interceptors/auth
*/
