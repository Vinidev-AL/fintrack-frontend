import { Routes } from '@angular/router';
import { TelaCadastrarUsuarioComponent } from './telas/tela-cadastrar-usuario/tela-cadastrar-usuario.component';
import { TelaLoginComponent } from './telas/tela-login/tela-login.component';
import { TelaCadastrarTransacaoComponent } from './telas/tela-cadastrar-transacao/tela-cadastrar-transacao.component';

export const routes: Routes = [
    { path: '', component: TelaCadastrarTransacaoComponent},  
    { path: '435345', component: TelaCadastrarUsuarioComponent }, 
    { path: 'login', component: TelaLoginComponent }, 
];

