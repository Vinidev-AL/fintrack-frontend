import { Routes } from '@angular/router';
import { TelaInserirMovimentacaoComponent } from './telas/tela-inserir-movimentacao/tela-inserir-movimentacao.component';
import { TelaCadastrarUsuarioComponent } from './telas/tela-cadastrar-usuario/tela-cadastrar-usuario.component';
import { TelaLoginComponent } from './telas/tela-login/tela-login.component';

export const routes: Routes = [
    { path: 'inserir-movimentacao', component: TelaInserirMovimentacaoComponent },  
    { path: '', component: TelaCadastrarUsuarioComponent }, 
    { path: 'login', component: TelaLoginComponent }, 
];

