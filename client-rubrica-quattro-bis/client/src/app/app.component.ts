import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Contatto } from './contatto';
import { ContattoDto } from './contattodto';
import { ListaContattiDto } from './listacontattidto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  contatto: Contatto = new Contatto();
  listaContatti: Contatto[] = [];

  constructor(private http: HttpClient){ 
    this.aggiornaRubrica();
  }

  aggiungi(){
    let dto: ContattoDto = new ContattoDto();
    dto.contatto = this.contatto;
    let oss: Observable <ListaContattiDto> = this.http.post<ListaContattiDto>("http://localhost:8080/add", dto);
    oss.subscribe(c => this.listaContatti = c.listaContatti);
  this.contatto = new Contatto();
  }
  cancella(c:Contatto){
  
    let dto: ContattoDto = new ContattoDto();
    dto.contatto = c;
    let ox: Observable <ListaContattiDto> = this.http.post<ListaContattiDto>(
      "http://localhost:8080/delete", dto);
      ox.subscribe(d=>this.listaContatti = d.listaContatti);
  }
  aggiornaRubrica() {
    let oss: Observable<ListaContattiDto> = this.http.get<ListaContattiDto>(
      "http://localhost:8080/refresh");
    oss.subscribe(v => this.listaContatti = v.listaContatti);
  }

}
