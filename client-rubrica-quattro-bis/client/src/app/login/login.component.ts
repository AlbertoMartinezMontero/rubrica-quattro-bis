import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() loginUser: string = "Inserire user Id";

  @Output() loginId: EventEmitter<string> = new EventEmitter<string>();

  user: string = "";


  constructor() { }

  ngOnInit(): void {
  }
  login() {
    this.loginId.emit(this.user);

  }
}
