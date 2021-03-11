import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() loginUser: string = "premmi qui";

  @Output() loginId: EventEmitter<string> = new EventEmitter<string>();

  user: string = "";
  userRegistrato: string = "quattro";
  valore:string = "";
  
  
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  login() {
    this.loginId.emit(this.user);

  }

  vaiAPagina(){
    this.router.navigateByUrl(this.valore)
  }
  /*if(user = "quattro"){
    this.valore = "/rubrica"
  }
  else{
    this.valore = "/errore"
    
  } 
  */
}
