/**
 * this module is intended to be included only required componants from angular material library
 */
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatCardModule, MatFormFieldModule} from '@angular/material';
// add only required modules
@NgModule({
  imports: [MatCardModule,MatFormFieldModule,MatButtonModule, MatCheckboxModule, MatInputModule, MatDatepickerModule,MatNativeDateModule],
  exports: [MatCardModule,MatFormFieldModule,MatButtonModule, MatCheckboxModule, MatInputModule, MatDatepickerModule,MatNativeDateModule]
})
export class CustomMaterialModule { }
