import { CadastrarComponent } from './components/views/pokemons/cadastrar/cadastrar.component';
import { ListarComponent } from './components/views/pokemons/listar/listar.component';
import { ListarTreinadoresComponent } from './components/views/treinadores/listar-treinadores/listar-treinadores.component';


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarTreinadoresComponent } from './components/views/treinadores/cadastrar-treinadores/cadastrar-treinadores.component';

const routes: Routes = [
  {
    //rota para listar os pokemons
    path : '',
    component : ListarComponent
  },
  {
    //rotas para cadastrar os pokemons
    path : 'simpledex/pokemon/cadastrar',
    component : CadastrarComponent
  },
  {
    //rota para listar os treinadores
    path : 'simpledex/treinador/listar',
    component : ListarTreinadoresComponent
  },
  {
    //rotas para cadastrar os treinadores
    path : 'simpledex/treinador/cadastrar',
    component :  CadastrarTreinadoresComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
