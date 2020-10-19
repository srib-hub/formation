import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BtnComponent } from './components/btn/btn.component';
import { TableDarkComponent } from './components/table-dark/table-dark.component';
import { TableLightComponent } from './components/table-light/table-light.component';
import { StateDirective } from './directives/state.directive';
import { ModaleComponent } from './components/modale/modale.component';
import { InvalidTypeDirective } from './directives/invalid-type.directive';
import { InvalidMessageDirective } from './directives/invalid-message.directive';



@NgModule({
  declarations: [TableLightComponent, StateDirective, BtnComponent, TableDarkComponent, ModaleComponent, InvalidTypeDirective, InvalidMessageDirective],
  imports: [
    CommonModule,RouterModule
  ],
  exports:[TableLightComponent,TableDarkComponent,StateDirective,BtnComponent, ModaleComponent, InvalidTypeDirective, InvalidMessageDirective]
})
export class SharedModule { }
