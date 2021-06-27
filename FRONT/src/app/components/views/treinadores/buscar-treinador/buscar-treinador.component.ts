import { TreinadoresService } from './../../../../services/treinadores.service';
import { Treinadores } from './../../../../models/Treinadores';
import { Component, OnInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TreinadorPokemonService } from 'src/app/services/treinadorPokemon.service';
@Component({
  selector: 'app-buscar-treinador',
  templateUrl: './buscar-treinador.component.html',
  styleUrls: ['./buscar-treinador.component.css']
})


export class BuscarTreinadorComponent implements OnInit {
  treinadores!: MatTableDataSource<Treinadores>;
  displayedColumns: string[] = ['pokeId','nome','email'];
  treinador : Treinadores = new Treinadores();
  pokeId : string = "";
  quantidadePokemonDoTreinador : string = "";
  quantidadePokemonDoTreinadorPorTipo : string = "";

  constructor(private service: TreinadoresService, private service2 : TreinadorPokemonService) { }

  ngOnInit(): void {
    this.treinadores = new MatTableDataSource<Treinadores>();
  }
  buscar(pokeId : string): void{
    this.service.buscar(pokeId).subscribe((treinador) => {
      this.treinadores = new MatTableDataSource<Treinadores>(treinador);
      
    })
    
    this.service2.quantidadePokemonDoTreinador(pokeId).subscribe((retorno) => {
      console.log(retorno);
      this.quantidadePokemonDoTreinador = retorno.toString();
      
    })

    this.service2.quantidadePokemonDoTreinadorPorTipo(pokeId).subscribe((retorno) => {
      console.log(retorno);
      this.quantidadePokemonDoTreinador = retorno.toString();
      
    })
  }
}
