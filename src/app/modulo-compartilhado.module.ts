import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

// AQUI DEVE FICAR SÓ OS MODULOS QUE SE REPETEM CONSTANTEMENTE EM COMPONENTES, ex: CommonModule que é necessário para o ngIf funcionar
@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  providers: [],  
})
export class ModuloCompartilhadoModule {}
