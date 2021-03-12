import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ContaDto } from './conta-dto';
import { Contatto } from './contatto';
import { ContattoDto } from './contattodto';
import { ListaContattiDto } from './listacontattidto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  
  
  constructor(private http: HttpClient){ 
  

  
 /* conta(){
    let dto: ContaDto = new ContaDto;
    dto.conteggio = this.conteggio;
    let oss: Observable<ContaDto> = this.http.get<ContaDto>("http://localhost:8080/conta");
    oss.subscribe(c => this.conteggio = c.conteggio);
    }*/
  }

}