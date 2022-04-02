import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vtu8806finaltest';
  public a
  public b
  public c
  op1(){
    this.a=1
    this.b=0
    this.c=0

  }
  op2(){
    this.a=0
    this.b=1
    this.c=0

  }
  op3(){
    this.a=0
    this.b=0
    this.c=1

  }
  
}
