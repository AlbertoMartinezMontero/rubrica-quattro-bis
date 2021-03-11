import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContaDto } from './conta-dto';

@Component({
  selector: 'app-conteggio-page',
  templateUrl: './conteggio-page.component.html',
  styleUrls: ['./conteggio-page.component.css']
})
export class ConteggioPageComponent implements OnInit {

  conteggio: number = 0;

  constructor(private http: HttpClient) {
   }

  ngOnInit(): void {
  }

  conta(){
    let dto: ContaDto = new ContaDto;
    dto.conteggio = this.conteggio;
    let oss: Observable<ContaDto> = this.http.get<ContaDto>("http://localhost:8080/conta");
    oss.subscribe(c => this.conteggio = c.conteggio);
    }
  }
