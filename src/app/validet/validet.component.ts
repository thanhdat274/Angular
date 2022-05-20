import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-validet',
  templateUrl: './validet.component.html',
  styleUrls: ['./validet.component.css']
})
export class ValidetComponent implements OnInit {
  @Input() field: any;
  @Input() key: string;
  constructor() {
    this.key = '';
  }

  ngOnInit(): void {
  }

}
