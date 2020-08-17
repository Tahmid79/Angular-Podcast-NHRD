import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {

  paragraph = "The National Human Resource Development Network (NHRDN) in its more than 33 years of existence has played a catalyst role in preparing the leaders of today and tomorrow. With more than 13,000 members representing all aspects of work in India, NHRDN is a lodestar of the Indian industry and now, it continues its commitment to enhance HR capabilities with an all-new voice." ;

  constructor() { }

  ngOnInit(): void {

  }

}
