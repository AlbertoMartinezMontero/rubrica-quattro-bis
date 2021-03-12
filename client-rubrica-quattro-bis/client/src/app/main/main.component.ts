import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Contatto } from '../contatto';
import { ContattoDto } from '../contattodto';
import { ListaContattiDto } from '../listacontattidto';
import { ServiceComponentService } from '../service-component.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

contatto:Contatto;


  constructor( private http:HttpClient,
     public listaContatti: ServiceComponentService, private router: Router, ) {
    
   }
  aggiungi(){  
    let dto: ContattoDto = new ContattoDto();
    dto.contatto = this.contatto;
    let oss: Observable <ListaContattiDto> = this.http.post<ListaContattiDto>("http://localhost:8080/add", dto);
    oss.subscribe(c => this.listaContatti.listaContatti = c.listaContatti);
  this.contatto = new Contatto();
  }
  
  

  vaiAPagina(s: string) {
    this.router.navigateByUrl(s);
  }

  ngOnInit(): void {
  }

}
