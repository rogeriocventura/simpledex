import { TreinadoresService } from './../../../../services/treinadores.service';
import { Treinadores } from './../../../../models/Treinadores';
import { Component, OnInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
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


  constructor(private service: TreinadoresService) { }

  ngOnInit(): void {
    this.treinadores = new MatTableDataSource<Treinadores>();
  }
  buscar(pokeId : string): void{
    this.service.buscar(pokeId).subscribe((treinador) => {
      this.treinadores = new MatTableDataSource<Treinadores>(treinador);
      console.log(pokeId);
      console.log(treinador);
    })
  }
}
