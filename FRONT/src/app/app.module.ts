import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './components/views/pokemons/listar/listar.component';
import { CadastrarComponent } from './components/views/pokemons/cadastrar/cadastrar.component';
import { HeaderComponent } from './components/template/header/header.component';
import { ContentComponent } from './components/template/content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    CadastrarComponent,
    HeaderComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
