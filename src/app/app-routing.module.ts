import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuildModComponent } from './build-mod/build-mod.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'build-model' },
  { path: 'build-model', component: BuildModComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
