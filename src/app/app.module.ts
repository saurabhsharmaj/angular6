import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { TopnavComponent } from './shared/topnav/topnav.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CustomMaterialModule } from './custom-material';
import { FooterModule } from './shared/footer/footer.module';
import { TopnavModule } from './shared/topnav/topnav.module';
import { PolicyModule } from './policy/policy.module';
import { RegistrationModule } from './registration/registration.module';




@NgModule({
  declarations: [   
    AppComponent,
    TopnavComponent,
    FooterComponent
  ],
  imports: [
    FormsModule,
    HttpModule,
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    CustomMaterialModule,
    PolicyModule,
    RegistrationModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [TopnavComponent, FooterComponent]
})
export class AppModule { }
