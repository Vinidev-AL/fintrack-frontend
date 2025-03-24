import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaCadastrarUsuarioComponent } from './tela-cadastrar-usuario.component';

describe('TelaCadastrarUsuarioComponent', () => {
  let component: TelaCadastrarUsuarioComponent;
  let fixture: ComponentFixture<TelaCadastrarUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelaCadastrarUsuarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaCadastrarUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
