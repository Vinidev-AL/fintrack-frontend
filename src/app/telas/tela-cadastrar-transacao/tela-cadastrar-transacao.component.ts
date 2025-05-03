import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ModuloCompartilhadoModule } from '../../modulo-compartilhado.module';
import { FormInputTextComponent } from '../../formularios/form-input-text/form-input-text.component';
import { FormInputDateComponent } from '../../formularios/form-input-date/form-input-date.component';
import { FormInputSelectComponent } from '../../formularios/form-input-select/form-input-select.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChamadaService } from '../../_services/chamada.service';
import { MensagemService } from '../../_services/mensagem.service';
import { debounce, debounceTime } from 'rxjs';


interface DadosParaEnvio {
  name: string;
  date: string;
  amount: number;
  type: string;
}

interface TipoTransacao {
  id: string;
  nome: string;
}

@Component({
  selector: 'app-tela-cadastrar-transacao',
  imports: [
    ModuloCompartilhadoModule, 
    FormInputTextComponent,
    FormInputDateComponent,
    FormInputSelectComponent
  ],
  templateUrl: './tela-cadastrar-transacao.component.html',
  styleUrl: './tela-cadastrar-transacao.component.scss'
})
export class TelaCadastrarTransacaoComponent implements OnInit, AfterViewInit{

  constructor(
    private fb: FormBuilder,
    private chamadaService: ChamadaService,
    private mensagemService: MensagemService
  ){

  }

  podeEnviar: boolean = true;
  form!: FormGroup;

  tipos: TipoTransacao[] = [
    { id: 'EARNING', nome: 'GANHO' },
    { id: 'EXPENSE', nome: 'DESPESA' },
    { id: 'INVESTMENT', nome: 'INVESTIMENTO' }
  ]

  
  formatToISO(dateStr: string): string {
    const date = dateStr ? new Date(dateStr) : new Date();
    return date.toISOString();
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      date: ['', [Validators.required]],
      amount: ['', [Validators.required, Validators.min(0)]],
      type: ['', [Validators.required]],
    })
  }

  ngAfterViewInit(): void {
    this.form.valueChanges.pipe(
      debounceTime(300)
    ).subscribe((valor) => {

    })


    this.form.get('amount')?.valueChanges.pipe(
      debounceTime(300)
    ).subscribe((valor) => {
      if(!!valor){
        this.form.get('amount')?.setValue(parseFloat(valor), { emitEvent: false });
      }
      
    })



  }

  OnSubmit(){

  }


  async enviarDados(){
    this.podeEnviar = false
     // Inicializando o objeto com os valores do formulário
     let dadosParaEnvio: DadosParaEnvio = {
      name: '',
      date: '',
      amount: 0,
      type: ''
    };
    dadosParaEnvio = await this.chamadaService.estabeleObjetoValoresFormulario(dadosParaEnvio, this.form);

    dadosParaEnvio.date = this.formatToISO(dadosParaEnvio.date)

    // Enquanto não temos o JWT, vou definir um id estatico par ao usuário
    // No momento é esse: d73da3ba-fcc3-4b9a-bac2-ac0b6454fb1e

    // Atrinbiindo de forma estatica ao objeto de envio o id do usuário
    Object.assign(dadosParaEnvio, {user_id: 'd73da3ba-fcc3-4b9a-bac2-ac0b6454fb1e'})
    console.log("Dados para envio: ", dadosParaEnvio);


    console.log("Enviando dados");


    console.log("Dados para envio: ", dadosParaEnvio);


    this.chamadaService.chamadaPost('/transactions', dadosParaEnvio).subscribe({
      next: (valor) => {
        if(valor?.message){
          // caso tenha erro, vamos mostrar o pop-up de erro
          this.mensagemService.mensagemErro(`Erro ao cadastrar transação! ${valor.message}`, 5000);
        } else {
          // caso tenha sucesso, vamos mostrar o pop-up de sucesso
          this.mensagemService.mensagemSucesso('Transação cadastrada com sucesso!', 5000);
          this.form.reset(); // Limpa o formulário após o sucesso
        }

        console.log("Valor retornado: ", valor);  
      },
      error: (error) => {
        this.mensagemService.mensagemErro('Erro ao cadastrar transação!', 5000);
        this.podeEnviar = true
      },
      complete: () => { 
        console.log('Requisição concluída');
        setTimeout(()=>{
          this.podeEnviar = true
        }, 5000)

        this.form.reset(); // Limpa o formulário após o sucesso
      }



    })
  }
}

