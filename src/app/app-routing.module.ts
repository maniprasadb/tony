import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JioComponent } from './jio/jio.component';

const routes: Routes = [
    {
        path: 'jio',
        component: JioComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule {


 }
