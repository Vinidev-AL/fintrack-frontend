import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaCadastrarTransacaoComponent } from './tela-cadastrar-transacao.component';

describe('TelaCadastrarTransacaoComponent', () => {
  let component: TelaCadastrarTransacaoComponent;
  let fixture: ComponentFixture<TelaCadastrarTransacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelaCadastrarTransacaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaCadastrarTransacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
