import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const AuthModule = () =>
  import("./pages/auth/auth.module").then((m) => m.AuthModule);

const HomeModule = () =>
  import("./pages/home/home.module").then((m) => m.HomeModule);


const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
      {
        path: "home",
        loadChildren: HomeModule,
      },
  {
    path: "auth",
    loadChildren: AuthModule,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
