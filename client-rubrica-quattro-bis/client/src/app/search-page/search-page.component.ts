import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Contatto } from '../contatto';
import { ListaContattiDto } from '../listacontattidto';
import { CriterioRicercaDto } from './criterio-ricerca-dto';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  stringa: string = "";
  trovati: Contatto[] = [];

  constructor(private http: HttpClient) {
   }

  ngOnInit(): void {
  }

  ricerca() {
    let dto = new CriterioRicercaDto;
    dto.stringa = this.stringa;
    let oss: Observable<ListaContattiDto> = this.http.post<ListaContattiDto> ("http://localhost:8080/search", dto);
    oss.subscribe(s => this.trovati = s.listaContatti);
  }

}
