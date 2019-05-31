import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogeoComponent } from './logeo/logeo.component';

const routes: Routes = [
  {path: '',
    component: LogeoComponent  
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
