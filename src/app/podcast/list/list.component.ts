import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

  numbers;

  constructor() {
    this.numbers = Array(4).fill(0).map((x,i)=>i);
  }

  ngOnInit(): void {

  }

}
