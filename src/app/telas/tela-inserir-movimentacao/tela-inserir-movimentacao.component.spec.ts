import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaInserirMovimentacaoComponent } from './tela-inserir-movimentacao.component';

describe('TelaInserirMovimentacaoComponent', () => {
  let component: TelaInserirMovimentacaoComponent;
  let fixture: ComponentFixture<TelaInserirMovimentacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelaInserirMovimentacaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaInserirMovimentacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
