import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoaderService } from './_services/loader.service';
import { AlertaPopUpComponent } from './components/alerta-pop-up/alerta-pop-up.component';

@Component({
  selector: 'app-root',
  imports: [
    // Dependencias
    RouterOutlet,
    CommonModule,
    AlertaPopUpComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, AfterViewInit {

  constructor(private loaderService: LoaderService){}
  title = 'fintrack-frontend';

  loader: boolean = false


  ngOnInit(){
    
  }

  ngAfterViewInit(){
    this.loaderService.observavelControleLoader$.pipe().subscribe(valor => {
      this.loader = this.loaderService.getLoader()
    })
  }
}
