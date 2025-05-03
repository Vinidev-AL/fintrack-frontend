import { Component, OnInit } from '@angular/core';
import { ModuloCompartilhadoModule } from '../../modulo-compartilhado.module';
import { FormInputTextComponent } from '../../formularios/form-input-text/form-input-text.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChamadaService } from '../../_services/chamada.service';
import { MensagemService } from '../../_services/mensagem.service';

@Component({
  selector: 'app-tela-login',
  imports: [ModuloCompartilhadoModule, FormInputTextComponent],
  templateUrl: './tela-login.component.html',
  styleUrl: './tela-login.component.scss'
})
export class TelaLoginComponent {
  podeEnviar: boolean = true;
  form!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private chamadaService: ChamadaService,
    private mensagemService: MensagemService
  ) {}
  
  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

  }


  OnSubmit(){
    console.log("Teve submit");
  }

  enviarDados(){
    this.podeEnviar = false;
    let dadosParaEnvio = {};
    dadosParaEnvio = this.chamadaService.estabeleObjetoValoresFormulario(dadosParaEnvio, this.form);


    // Rotas de liogin ainda não feitas no back, aguardando conclusão do back-end para fazer o login
    if (this.form.valid) {
      this.chamadaService.chamadaPost('/users', dadosParaEnvio).subscribe({
        next: (valor) => {
          if (valor.error) {
            console.log("Erro na chamada: ", valor.error);
            this.mensagemService.mensagemErro(`Erro ao cadastrar usuário! ${valor.error}`, 5000);
          } else {

            // caso tenha sucesso, vamos mostrar o pop-up de sucesso
            this.mensagemService.mensagemSucesso('Usuário cadastrado com sucesso!', 5000);
          }
        },
        error: (error) => {
          this.mensagemService.mensagemErro('Erro ao cadastrar usuário!', 5000);
          console.error('Erro ao fazer a requisição:', error);
          this.podeEnviar = true
        },
        complete: () => {
          console.log('Requisição concluída');
          setTimeout(()=>{
            this.podeEnviar = true
          }, 5000)
        }
      });
    }
  }
}



