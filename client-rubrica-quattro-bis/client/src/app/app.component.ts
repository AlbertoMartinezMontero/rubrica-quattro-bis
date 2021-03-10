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
  }

  aggiungi(){
    let dto: ContattoDto = new ContattoDto();
    dto.contatto = this.contatto;
    let oss: Observable <ListaContattiDto> = this.http.post<ListaContattiDto>("http://localhost8080/add", dto);
    oss.subscribe(c => this.listaContatti = c.listaContatti);
  }
}
