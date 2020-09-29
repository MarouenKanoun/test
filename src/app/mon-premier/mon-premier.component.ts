import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mon-premier',
  templateUrl: './mon-premier.component.html',
  styleUrls: ['./mon-premier.component.scss']
})
export class MonPremierComponent implements OnInit {

  @Input() appareilName: string;
  @Input() appareilStatus: string;

  constructor() { }



  ngOnInit(): void {
  }

  public somme(t:number,v:number):number{
  return t+v;

  }

 
}
