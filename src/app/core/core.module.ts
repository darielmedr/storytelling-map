import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';

const commonElements: any[] = [
  NavbarComponent
];

@NgModule({
  declarations: [
    ...commonElements
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ...commonElements
  ]
})
export class CoreModule { }
