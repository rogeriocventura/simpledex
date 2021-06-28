import { TreinadoresService } from 'src/app/services/treinadores.service';
import { Component, OnInit } from '@angular/core';
import { Treinadores } from 'src/app/models/Treinadores';

@Component({
  selector: 'app-update-treinador',
  templateUrl: './update-treinador.component.html',
  styleUrls: ['./update-treinador.component.css']
})
export class UpdateTreinadorComponent implements OnInit {
  treinador : Treinadores = new Treinadores();
  constructor(private service : TreinadoresService) { }

  ngOnInit(): void {
  }
  alterar(){
    this.service.atualizar(this.treinador).subscribe((treinador) => {
      console.log(treinador);
    })
  }
}
