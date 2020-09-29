import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-itmes',
  templateUrl: './itmes.component.html',
  styleUrls: ['./itmes.component.scss']
})
export class ItmesComponent implements OnInit {
  
  @Input() titre: string;
  @Input() id: number;

  constructor() { }

  ngOnInit(): void {
  }

}
