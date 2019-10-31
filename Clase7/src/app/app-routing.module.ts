import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerfilcedinsiComponent } from './_micomponente/perfilcedinsi/perfilcedinsi.component';
import { PortafolioCedinsiComponent } from './_micomponente/portafolio-cedinsi/portafolio-cedinsi.component';
import { HomeCedinsiComponent } from './_micomponente/home-cedinsi/home-cedinsi.component';


const routes: Routes = [

  { path: 'perfil', component: PerfilcedinsiComponent},
  { path: 'portafolio', component: PortafolioCedinsiComponent},
  { path: 'home', component: HomeCedinsiComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
