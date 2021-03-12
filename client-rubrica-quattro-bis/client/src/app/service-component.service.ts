import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contatto } from './contatto';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceComponentService {
  listaContatti:Contatto[] = [];

  constructor(private http:HttpClient) { }
}
