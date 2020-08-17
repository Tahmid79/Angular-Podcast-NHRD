import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  c1 = 'To augment knowledge and skills relevant to HRD, its philosophy, processes and implementation, through exploration and experimentation.';

  constructor() { }

  ngOnInit(): void {
  }

}
