import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Contatto } from '../contatto';
import { ContattoDto } from '../contattodto';
import { ListaContattiDto } from '../listacontattidto';
import { ServiceComponentService } from '../service-component.service';

@Component({
  selector: 'app-tabella-rubrica',
  templateUrl: './tabella-rubrica.component.html',
  styleUrls: ['./tabella-rubrica.component.css']
})
export class TabellaRubricaComponent implements OnInit {
  
  contatto: Contatto = new Contatto();
  listaContatti: Contatto[] = [];

  constructor(private http: HttpClient) { this.aggiornaRubrica(); }



  aggiornaRubrica() {
    let oss: Observable<ListaContattiDto> = this.http.get<ListaContattiDto>(
      "http://localhost:8080/refresh");
    oss.subscribe(v => this.listaContatti = v.listaContatti);
  }

  cancella(c: Contatto) {

    let dto: ContattoDto = new ContattoDto();
    dto.contatto = c;
    let ox: Observable<ListaContattiDto> = this.http.post<ListaContattiDto>(
      "http://localhost:8080/delete", dto);
    ox.subscribe(d => this.listaContatti = d.listaContatti);
  }

  ngOnInit(): void {
  }
}
