import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Infos} from "./statics/infos";
import {HomeComponent} from "./pages/home/home.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
];

function getRoutes(): Routes {
  routes.push(...Infos.getRoutes());
  return routes;
}

@NgModule({
  imports: [RouterModule.forRoot(getRoutes())],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
