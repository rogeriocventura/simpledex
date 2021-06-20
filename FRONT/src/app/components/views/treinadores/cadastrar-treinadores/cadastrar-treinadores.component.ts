import { Component, OnInit } from '@angular/core';
import { Treinadores } from 'src/app/models/Treinadores';
import { TreinadoresService } from 'src/app/services/treinadores.service';


@Component({
  selector: 'app-cadastrar-treinadores',
  templateUrl: './cadastrar-treinadores.component.html',
  styleUrls: ['./cadastrar-treinadores.component.css']
})
export class CadastrarTreinadoresComponent implements OnInit {
  
  treinador : Treinadores = new Treinadores();
  campo : string = "";
  constructor(private service : TreinadoresService) { }

  ngOnInit(): void {
  }
  cadastrar(): void{
    console.log(this.treinador.createdAt);
    // this.pokemon = new Pokemons();
    // this.pokemon.createdAt = new Date("2021/06/14");
    this.service.cadastrar(this.treinador).subscribe((treinador) => {
      console.log(treinador);
    })
  }

}
