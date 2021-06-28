import { TreinadoresService } from './../../../../services/treinadores.service';
import { Treinadores } from './../../../../models/Treinadores';
import { Component, OnInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-remover-treinador',
  templateUrl: './remover-treinador.component.html',
  styleUrls: ['./remover-treinador.component.css']
})
export class RemoverTreinadorComponent implements OnInit {
  treinadores : Treinadores[] = [];
  treinador : Treinadores = new Treinadores();
  treinadorId : string = "";
  constructor(private service : TreinadoresService) { }

  ngOnInit(): void {
    this.service.listar().subscribe((treinador) => {
      this.treinadores = treinador;
    })
  }
  remover(pokeId : string): void {
    this.service.remover(pokeId).subscribe((treinador) => {
      console.log(treinador);
    })
  }
}
