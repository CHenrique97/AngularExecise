import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path: 'gallery/:username', component: PhotoGalleryComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
