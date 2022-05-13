import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-champ',
  templateUrl: './champ.component.html',
  styleUrls: ['./champ.component.css']
})
export class ChampComponent implements OnInit {
@Input('champ') champ:any;
  constructor() { }

  ngOnInit(): void {
  }

}
