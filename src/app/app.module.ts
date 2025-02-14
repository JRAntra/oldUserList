import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputFormComponent } from './pages/userlist/input-form/input-form.component';
import { UserTableComponent } from './pages/userlist/user-table/user-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserlistComponent } from './pages/userlist/userlist.component';
import { LoginComponent } from './pages/login/login.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'userlist', component: UserlistComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'userlist', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    InputFormComponent,
    UserTableComponent,
    UserlistComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
