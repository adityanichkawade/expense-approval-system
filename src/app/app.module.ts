import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { GlobaErrorHandler } from './shared/error-handler/global.errorhandler';

import { SignupComponent } from './signup/signup.component';
import { ExpenseComponent } from './expense/expense.component';
import { LoginComponent } from './login/login.component';
import { ExpenseModalComponent } from './expense/expense-modal/expense-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    ExpenseComponent,
    LoginComponent,
    ExpenseModalComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: GlobaErrorHandler,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
