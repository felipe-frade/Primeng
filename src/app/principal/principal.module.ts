import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { PrincipalRoutingModule } from './principal-rounting.module';

@NgModule({
  declarations: [InputComponent],
  imports: [
    PrincipalRoutingModule,
    CommonModule,
  ]
})
export class PrincipalModule { }
