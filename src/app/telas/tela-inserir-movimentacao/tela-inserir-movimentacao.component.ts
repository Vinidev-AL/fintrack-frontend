import { Component } from '@angular/core';
import { FormInputTextComponent } from '../../formularios/form-input-text/form-input-text.component';
import { ModuloCompartilhadoModule } from '../../modulo-compartilhado.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormInputDateComponent } from '../../formularios/form-input-date/form-input-date.component';
import { FormInputSelectComponent } from '../../formularios/form-input-select/form-input-select.component';

@Component({
  selector: 'app-tela-inserir-movimentacao',
  imports: [
    ModuloCompartilhadoModule,
    FormInputTextComponent, 
    FormInputDateComponent,
    FormInputSelectComponent
  ],
  templateUrl: './tela-inserir-movimentacao.component.html',
  styleUrl: './tela-inserir-movimentacao.component.scss'
})
export class TelaInserirMovimentacaoComponent {
  form!: FormGroup;


  opcoes = [
    { id: 1, nome: 'Despesa' },
    { id: 2, nome: 'Receita' }
  ];
  

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {

    // Inicializa o FormGroup com os controles e suas validações
    this.form = this.fb.group({
      descricao: ['', []],
      valor: ['', [Validators.required]],
      dtMovimento: ['', [Validators.required]],
      selectTipo: ['', [Validators.required]]
    });

    this.form.get('nome')?.valueChanges.pipe().subscribe(valor => {
      console.log("Teve alteração: ", valor)
    })
  }

  // Usaremos essa função para observar toda vez que tiver alteração no f
  OnSubmit(){
    console.log("Teve submit")
  }
}
