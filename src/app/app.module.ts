import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import bg from '@angular/common/locales/bg';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { bg_BG, NZ_I18N } from 'ng-zorro-antd/i18n';
import { AntDesignComponentsModule } from './ant-design-components/ant-design-components.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { LoginComponent } from './authentication/login/login.component';

registerLocaleData(bg);

@NgModule({
  declarations: [AppComponent, AuthenticationComponent, LoginComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AntDesignComponentsModule,
    ReactiveFormsModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: bg_BG }],
  bootstrap: [AppComponent],
})
export class AppModule {}
