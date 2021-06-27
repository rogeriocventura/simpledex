import { Treinadores } from './../../../../models/Treinadores';
import { Component, OnInit } from '@angular/core';
import { TreinadoresService } from 'src/app/services/treinadores.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-listar-treinadores',
  templateUrl: './listar-treinadores.component.html',
  styleUrls: ['./listar-treinadores.component.css']
})
export class ListarTreinadoresComponent implements OnInit {
  //treinador : Treinadores[] = [];
  Treinadores!: MatTableDataSource<Treinadores>;
  displayedColumns: string[] = ['treinador.nome','treinador.email','treinador.senha','treinador.pokeId','treinador.createdAt'];
  treinadores : Treinadores = new Treinadores();


  constructor(private service : TreinadoresService) { }
  

  ngOnInit(): void {
    this.service.listar().subscribe(( treinador ) => {
      this.Treinadores = new MatTableDataSource<Treinadores>(treinador); 
    });
}

}
