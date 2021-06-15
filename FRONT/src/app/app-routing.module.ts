import { CadastrarComponent } from './components/views/pokemons/cadastrar/cadastrar.component';
import { ListarComponent } from './components/views/pokemons/listar/listar.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
