import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AADComponent } from './AADPage/AAD.component';
import { HomeComponent } from './home/home.component';
import { PressReleaseComponent } from './press-release-component/press-release.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'announcement',
    component: PressReleaseComponent,
  },
  {
    path: 'aad',
    component: AADComponent
  },
  {
    path: 'AAD',
    component: AADComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { 
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

