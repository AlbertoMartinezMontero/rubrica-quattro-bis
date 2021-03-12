
  import { HttpClient } from '@angular/common/http';
  import { Component, OnInit } from '@angular/core';
  import { Observable } from 'rxjs';
  import { ContaDto } from '../conta-dto';
  
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
  }