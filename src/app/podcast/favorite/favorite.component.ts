import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  numbers ;

  constructor() {
    this.numbers = Array(7).fill(0).map((x,i)=>i);
  }

  ngOnInit(): void {
  }

}
