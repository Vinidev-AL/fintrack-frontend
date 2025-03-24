import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor() { }

  private controleLoader = new BehaviorSubject<boolean>(false)
  observavelControleLoader$ = this.controleLoader.asObservable()

  setLoader(valor: boolean){
    this.controleLoader.next(valor)
  }

  getLoader(){
    return this.controleLoader.value
  }

}
