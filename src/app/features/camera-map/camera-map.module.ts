import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CameraMapComponent } from './camera-map.component';


const routes: Routes = [
  { path: '', component: CameraMapComponent }
];

@NgModule({
  declarations: [
    CameraMapComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CameraMapModule { }
