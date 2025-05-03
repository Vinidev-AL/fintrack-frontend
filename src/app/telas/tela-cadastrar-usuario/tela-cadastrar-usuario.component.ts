import { Component, OnInit } from '@angular/core';
import { ModuloCompartilhadoModule } from '../../modulo-compartilhado.module';
import { FormInputTextComponent } from '../../formularios/form-input-text/form-input-text.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChamadaService } from '../../_services/chamada.service';
import { MensagemService } from '../../_services/mensagem.service';

interface DadosParaEnvio {
  name: string;
  date: string;
  valor: number;
  type: string;
}

@Component({
  selector: 'app-tela-cadastrar-usuario',
  imports: [ModuloCompartilhadoModule, FormInputTextComponent],
  templateUrl: './tela-cadastrar-usuario.component.html',
  styleUrl: './tela-cadastrar-usuario.component.scss'
})
export class TelaCadastrarUsuarioComponent implements OnInit {
  
  podeEnviar: boolean = true;
  form!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private chamadaService: ChamadaService,
    private mensagemService: MensagemService
  ) {}

  
  ngOnInit(): void {
    this.form = this.fb.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  
  OnSubmit(){
    console.log("Teve submit");
  }

  async enviarDados(){
    this.podeEnviar = false;
    let dadosParaEnvio = {}

    if (this.form.valid) {
      this.chamadaService.chamadaPost('/users', dadosParaEnvio).subscribe({
        next: (valor) => {
          if (valor?.message) {
            // caso tenha erro, vamos mostrar o pop-up de erro
            this.mensagemService.mensagemErro(`Erro ao cadastrar usuário! ${valor.error}`, 5000);
          } else {
            // caso tenha sucesso, vamos mostrar o pop-up de sucesso
            this.mensagemService.mensagemSucesso('Usuário cadastrado com sucesso!', 5000);
            this.form.reset(); // Limpa o formulário após o sucesso
          }
        },
        error: (error) => {
          this.mensagemService.mensagemErro('Erro ao cadastrar usuário!', 5000);
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
