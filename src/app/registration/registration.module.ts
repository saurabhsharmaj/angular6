import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CustomMaterialModule } from '../custom-material';

@NgModule({
  imports: [
    FormsModule, CommonModule, RouterModule, CustomMaterialModule
  ],
  declarations: [RegistrationComponent],
  exports: [RegistrationComponent]
  
})
export class RegistrationModule { }
