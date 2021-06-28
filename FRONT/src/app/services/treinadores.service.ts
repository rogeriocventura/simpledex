import { Treinadores } from './../models/Treinadores';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TreinadoresService {

  private baseURL = "http://localhost:3000/";

  constructor(private http: HttpClient) { }

  listar() : Observable<Treinadores[]>{
    return this.http.get<Treinadores[]>(`${this.baseURL}simpledex/treinador/listar`);
  }

  cadastrar(treinador : Treinadores) : Observable<Treinadores>{
    return this.http.post<Treinadores>(`${this.baseURL}simpledex/treinador/cadastrar`, treinador);
  }

  buscar(pokeId : string) : Observable<Treinadores[]>{
    return this.http.get<Treinadores[]>(`${this.baseURL}simpledex/treinador/buscar/`+ pokeId);
  }
  
  atualizar(treinador : Treinadores) : Observable<Treinadores>{
    return this.http.put<Treinadores>(`${this.baseURL}simpledex/treinador/alterar`, treinador);
  }
}
