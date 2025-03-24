import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LoaderService } from './loader.service';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChamadaService {

  baseURlApi = 'http://localhost:8080/api'

  constructor(
    private loaderService: LoaderService
  ) {}

  estabeleObjetoValoresFormulario(dadosParaEnvio: any, form: FormGroup){
    Object.entries(form.controls).forEach(([chave, valor]) => {
      Object.assign(dadosParaEnvio, {[`${chave}`]: valor.value})
    });

    return dadosParaEnvio
  }

  chamadaPost(endpoint: string, objetoDeEnvio: any): Observable<any> {
    this.loaderService.setLoader(true);
    const url = `${this.baseURlApi}${endpoint}`;

    const fetchPromise = fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(objetoDeEnvio),
    })
    .then(response => response.json())
    .then(data => {
      this.loaderService.setLoader(false);
      return data;
    })
    .catch(error => {
      this.loaderService.setLoader(false);
      console.error('Erro ao fazer a requisição:', error);
      throw error;
    });

    return from(fetchPromise);
  }
}

