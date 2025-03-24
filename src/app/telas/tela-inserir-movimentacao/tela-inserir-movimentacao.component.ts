import { Component, OnInit } from '@angular/core';
import { FormInputTextComponent } from '../../formularios/form-input-text/form-input-text.component';
import { ModuloCompartilhadoModule } from '../../modulo-compartilhado.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormInputDateComponent } from '../../formularios/form-input-date/form-input-date.component';
import { FormInputSelectComponent } from '../../formularios/form-input-select/form-input-select.component';
import { ChamadaService } from '../../_services/chamada.service';

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
export class TelaInserirMovimentacaoComponent implements OnInit {



  form!: FormGroup;


  opcoes = [
    { id: 0, nome: 'Despesa' },
    { id: 1, nome: 'Receita' }
  ];
  

  constructor(
    private fb: FormBuilder,
    private chamadaService: ChamadaService,
  ) {}

  ngOnInit(): void {

    // Inicializa o FormGroup com os controles e suas validações
    this.form = this.fb.group({
      descricao: ['', []],
      valor: ['', [Validators.required]],
      data: ['', [Validators.required]],
      tipo: ['', [Validators.required]]
    });

    this.form.get('nome')?.valueChanges.pipe().subscribe(valor => {
      console.log("Teve alteração: ", valor)
    })
  }

  // Usaremos essa função para observar toda vez que tiver alteração no f
  OnSubmit(){
    console.log("Teve submit")
  }

  async enviarDados(){

    let dadosParaEnvio = {}

    // Cria o objeto com os valores dos formulários
    dadosParaEnvio = await this.chamadaService.estabeleObjetoValoresFormulario(dadosParaEnvio, this.form)
 

    // Estou adicionando ao objeto de envio, o user_id estatico para fins de teste
    // Esse valor deve ser extraido do token jwt
    Object.assign(dadosParaEnvio, {user_id: 'b4bf6cac-7d3a-4344-bd63-252704fc569a'})


    // Estou adicionando manualmente pq isso vai veriricar se foi criado atravez de arquivo ofx ou n
    Object.assign(dadosParaEnvio, {ofx_imported: false})


    //Usamos essa função para chamadas do tipo post
    const resultado = this.chamadaService.chamadaPost('/ofxtransacoes', dadosParaEnvio)

    console.log(resultado)
  }
  


}


