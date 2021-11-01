import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StaticMapComponent } from './static-map.component';
import { MapComponent } from './components/map/map.component';
import { StaticMapService } from './services/static-map.service';
import { StoryComponent } from './components/story/story.component';


const routes: Routes = [
  { path: '', component: StaticMapComponent }
];

@NgModule({
  declarations: [
    StaticMapComponent,
    MapComponent,
    StoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    StaticMapService
  ]
})
export class StaticMapModule { }
