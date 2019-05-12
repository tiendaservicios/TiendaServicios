import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { CatalogComponent } from './catalog/catalog.component';
import { EmpleosService } from './empleos.service';

@NgModule({
  declarations: [CatalogComponent],
  imports: [
    CommonModule,
    StoreRoutingModule
  ],
  providers: [EmpleosService]
})
export class StoreModule { }
