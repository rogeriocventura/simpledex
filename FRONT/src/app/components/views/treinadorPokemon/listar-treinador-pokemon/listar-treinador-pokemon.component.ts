import { TreinadorPokemonService } from './../../../../services/treinadorPokemon.service';
import { TreinadorPokemon } from './../../../../models/TreinadorPokemon';
import { Pokemons } from './../../../../models/Pokemons';
import { Treinadores } from './../../../../models/Treinadores';
import { Component, OnInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-listar-treinador-pokemon',
  templateUrl: './listar-treinador-pokemon.component.html',
  styleUrls: ['./listar-treinador-pokemon.component.css']
})
export class ListarTreinadorPokemonComponent implements OnInit {
  treinadorPokemons!: MatTableDataSource<TreinadorPokemon>;
  displayedColumns: string[] = ['treinador.nome','treinador.pokeId','pokemon.nome','pokemon.tipo','pokemon.descricao'];
  treinadorPokemon : TreinadorPokemon = new TreinadorPokemon();



  constructor(private service: TreinadorPokemonService) { }

  ngOnInit(): void {
    this.service.listarTreinadorPokemon().subscribe((treinadorPokemons) => {
      this.treinadorPokemons = new MatTableDataSource<TreinadorPokemon>(treinadorPokemons)
    })
  }

}

