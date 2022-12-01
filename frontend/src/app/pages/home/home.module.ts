import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/components/shared.module';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { AssociationsComponent } from './components/associations/associations.component';
import { AssociationComponent } from './components/associations/components/association/association.component';


@NgModule({
  declarations: [
    HomeComponent,
    AssociationsComponent,
    AssociationComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }
