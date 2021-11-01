import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const commonElements: any[] = [

];

@NgModule({
  declarations: [
    ...commonElements
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...commonElements
  ]
})
export class SharedModule { }
