import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';
import { HomeComponent } from './pages/home/home.component';

const AuthModule = () =>
  import("./pages/auth/auth.module").then((m) => m.AuthModule);


const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
      {
        path: "home",
        component: HomeComponent,
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
