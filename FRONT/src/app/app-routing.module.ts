import { CadastrarComponent } from './components/views/pokemons/cadastrar/cadastrar.component';
import { ListarComponent } from './components/views/pokemons/listar/listar.component';
import { ListarTreinadoresComponent } from './components/views/treinadores/listar-treinadores/listar-treinadores.component';


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarTreinadoresComponent } from './components/views/treinadores/cadastrar-treinadores/cadastrar-treinadores.component';
import { BuscarPokemonComponent } from './components/views/pokemons/buscar-pokemon/buscar-pokemon.component';
import { BuscarTreinadorComponent } from './components/views/treinadores/buscar-treinador/buscar-treinador.component';

const routes: Routes = [
  {
    //rota para listar os pokemons
    path : 'simpledex/pokemon/listar',
    component : ListarComponent
  },
  {
    //rota para buscar os pokemons
    path : 'simpledex/pokemon/buscar',
    component : BuscarPokemonComponent
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
    //rota para buscar treinador por pokeId
    path : 'simpledex/treinador/buscar',
    component : BuscarTreinadorComponent
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
