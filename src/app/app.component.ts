import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormInputTextComponent } from './formularios/form-input-text/form-input-text.component';

@Component({
  selector: 'app-root',
  imports: [
    // Dependencias
    RouterOutlet,
    CommonModule,
    
    // Componentes
    FormInputTextComponent
  
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'fintrack-frontend';
}
