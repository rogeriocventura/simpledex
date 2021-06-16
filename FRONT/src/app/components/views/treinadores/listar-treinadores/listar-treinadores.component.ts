import { Component, OnInit } from '@angular/core';
import { Treinadores } from 'src/app/models/Treinadores';
import { TreinadoresService } from 'src/app/services/treinadores.service';

@Component({
  selector: 'app-listar-treinadores',
  templateUrl: './listar-treinadores.component.html',
  styleUrls: ['./listar-treinadores.component.css']
})
export class ListarTreinadoresComponent implements OnInit {
  treinador : Treinadores[] = [];
  constructor(private service : TreinadoresService) { }

  ngOnInit(): void {
    this.service.listar().subscribe(( treinador ) => {
      this.treinador = treinador; 
    });
}

}
