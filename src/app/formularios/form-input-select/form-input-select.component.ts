import { Component, Input, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { ModuloCompartilhadoModule } from '../../modulo-compartilhado.module';

@Component({
  selector: 'app-input-select',
  templateUrl: './form-input-select.component.html',
  styleUrls: ['./form-input-select.component.scss'],
  imports: [FormsModule, ModuloCompartilhadoModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormInputSelectComponent),
      multi: true
    }
  ]
})
export class FormInputSelectComponent implements ControlValueAccessor, OnInit {
  @Input() label: string = ''; 
  @Input() id: string = '';
  @Input() opcoes: { id: string | number, nome: string }[] = [];
  @Input() nome: string = '';
  @Input() eInvalido: boolean = false;

  value: string | number = '';  
  onChange: any = () => {}; 
  onTouched: any = () => {}; 

  ngOnInit() {}

  // ControlValueAccessor - Função que permite ao Angular gerenciar o valor do input
  writeValue(value: any): void {
    if (value !== undefined) {
      this.value = value;
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  // Função que é chamada quando o valor do select muda
  onInputChange(event: any): void {
    this.value = event.target.value;
    this.onChange(this.value);
  }

  // Função chamada quando o select perde o foco
  onInputBlur(): void {
    this.onTouched();
  }
}
