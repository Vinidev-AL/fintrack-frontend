import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { ModuloCompartilhadoModule } from '../../modulo-compartilhado.module';
import { MensagemService } from '../../_services/mensagem.service';

@Component({
  selector: 'app-alerta-pop-up',
  imports: [ModuloCompartilhadoModule],
  templateUrl: './alerta-pop-up.component.html',
  styleUrl: './alerta-pop-up.component.scss'
})
export class AlertaPopUpComponent implements OnInit, AfterViewInit {

  mensagemAlerta: string = '';
  tipoAlerta: string = '';
  visivel: boolean = true;
  tempoEmSegundos: number = 5000;



  constructor(private mensagemService: MensagemService) { }

  ngOnInit(){
  }

  ngAfterViewInit(): void {
    this.mensagemService.alertaPopUp$.subscribe({
      next: (valor) => {
        
        this.visivel = true;
        this.mensagemAlerta = valor.mensagem;
        this.tipoAlerta = valor.tipoAlerta;
        

        setTimeout(() => {
          this.visivel = false;
        }, valor.tempoEmSegundos)
      }
    })
  }
}
