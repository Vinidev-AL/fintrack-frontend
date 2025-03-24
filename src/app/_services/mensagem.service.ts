import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface Mensagem {
  tipoAlerta: string,
  mensagem: string,
  tempoEmSegundos: number
}

@Injectable({
  providedIn: 'root'
})
export class MensagemService {

  constructor() { }
  
  alertaPopUp = new BehaviorSubject<Mensagem>({
    tipoAlerta: '',
    mensagem: '',
    tempoEmSegundos: 0
  })

  alertaPopUp$ = this.alertaPopUp.asObservable()

  mensagemAlerta(mensagem: string, tempoEmSegundos: number){
    this.alertaPopUp.next({
      tipoAlerta: 'alerta',
      mensagem: mensagem,
      tempoEmSegundos: tempoEmSegundos
    })
  }

  mensagemErro(mensagem: string, tempoEmSegundos: number){
    this.alertaPopUp.next({
      tipoAlerta: 'erro',
      mensagem: mensagem,
      tempoEmSegundos: tempoEmSegundos
    })
  }

  mensagemSucesso(mensagem: string, tempoEmSegundos: number){
    this.alertaPopUp.next({
      tipoAlerta: 'sucesso',
      mensagem: mensagem,
      tempoEmSegundos: tempoEmSegundos
    })
  }
}
