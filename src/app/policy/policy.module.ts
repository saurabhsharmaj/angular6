import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PolicyComponent } from './policy.component';
import { CustomMaterialModule } from '../custom-material';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    FormsModule, CommonModule, RouterModule, CustomMaterialModule
  ],
  declarations: [PolicyComponent],
  exports: [PolicyComponent]
})
export class PolicyModule { }
