import { Component, OnInit } from '@angular/core';
import { StuffService } from "./../stuff.service";

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
 public arr=[];

  constructor(private stuff : StuffService) { }

  ngOnInit(): void {
    this.arr=this.stuff.geth()

    
     
  }

}
