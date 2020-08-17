import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  images = [
    {
      name : 'Agra' ,
      url : 'assets/bottom/agra.png'
    } ,
    {
      name : 'Ahmedabad' ,
      url : 'assets/bottom/amd.png',
    },
    {
      name : 'Bangalore',
      url : 'assets/bottom/bangalore.png'
    } ,
    {
      name : 'Baroda' ,
      url : 'assets/bottom/baroda.png'
    },
    {
      name : 'Bhopal' ,
      url : 'assets/bottom/bhopal.png'
    },
    {
      name : 'Bhubaneswar'  ,
      url : 'assets/bottom/bhb.png'
    }
  ] ;

  constructor() { }

  ngOnInit(): void {
  }

}
