import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/components/shared.module';
import { GlossaryComponent } from './glossary.component';
import { GlossaryRoutingModule } from './glossary-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { LetterGlossaryComponent } from './components/letter-glossary/letter-glossary.component';


@NgModule({
  declarations: [
    GlossaryComponent,
    LetterGlossaryComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    GlossaryRoutingModule,
    HttpClientModule
  ]
})
export class GlossaryModule { }
