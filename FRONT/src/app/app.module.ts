import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { MatTableModule } from '@angular/material/table' 
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ListarComponent } from './components/views/pokemons/listar/listar.component';
import { CadastrarComponent } from './components/views/pokemons/cadastrar/cadastrar.component';
import { HeaderComponent } from './components/template/header/header.component';
import { ContentComponent } from './components/template/content/content.component';
import { FormsModule } from '@angular/forms';
import { ListarTreinadoresComponent } from './components/views/treinadores/listar-treinadores/listar-treinadores.component';
import { CadastrarTreinadoresComponent } from './components/views/treinadores/cadastrar-treinadores/cadastrar-treinadores.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BuscarPokemonComponent } from './components/views/pokemons/buscar-pokemon/buscar-pokemon.component';
import { BuscarTreinadorComponent } from './components/views/treinadores/buscar-treinador/buscar-treinador.component';
import { ListarTreinadorPokemonComponent } from './components/views/treinadorPokemon/listar-treinador-pokemon/listar-treinador-pokemon.component';
import { CadastrarTreinadorPokemonComponent } from './components/views/treinadorPokemon/cadastrar-treinador-pokemon/cadastrar-treinador-pokemon.component';
import { UpdatePokemonComponent } from './components/views/pokemons/update-pokemon/update-pokemon.component';
import { UpdateTreinadorComponent } from './components/views/treinadores/update-treinador/update-treinador.component';
import { RemoverTreinadorComponent } from './components/views/treinadores/remover-treinador/remover-treinador.component';
import { RemoverPokemonComponent } from './components/views/pokemons/remover-pokemon/remover-pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    CadastrarComponent,
    HeaderComponent,
    ContentComponent,
    ListarTreinadoresComponent,
    CadastrarTreinadoresComponent,
    BuscarPokemonComponent,
    BuscarTreinadorComponent,
    ListarTreinadorPokemonComponent,
    CadastrarTreinadorPokemonComponent,
    UpdatePokemonComponent,
    UpdateTreinadorComponent,
    RemoverTreinadorComponent,
    RemoverPokemonComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatTableModule,
    MatSelectModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
