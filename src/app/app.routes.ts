import { Routes } from '@angular/router';
import { TelaInserirMovimentacaoComponent } from './telas/tela-inserir-movimentacao/tela-inserir-movimentacao.component';
import { TelaCadastrarUsuarioComponent } from './telas/tela-cadastrar-usuario/tela-cadastrar-usuario.component';

export const routes: Routes = [
    { path: 'inserir-movimentacao', component: TelaInserirMovimentacaoComponent },  
    { path: '', component: TelaCadastrarUsuarioComponent }, 
];

