import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogincedinsiComponent } from './_micomponente/logincedinsi/logincedinsi.component';


const routes: Routes = [

  { path: '**', component: LogincedinsiComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
