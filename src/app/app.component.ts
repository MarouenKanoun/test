import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mon-projet-angular';
  test = 'test';
  test2 = 1+2;

 
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });


  appareilOne = 'Machine à laver';
  appareilTwo = 'Frigo4';
  appareilThree = 'Ordinateur';

  appareils = [
    {
      name: 'Machine à laver',
      status: 'éteint'
    },
    {
      name: 'Frigo',
      status: 'allumé'
    },
    {
      name: 'Ordinateur',
      status: 'éteint'
    }
  ];

  public add(x: number, y: number): number{
    return x+y;
    
  }

  public sub(x,y) {
    return x+y;
  }

  public mov(){
    console.log("tttttttt");
  }
  public chtext(v){
    console.log("ccc"+v);
  }


  isAuth = false;

  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
       
      }, 5000
    );
  }


  onAllumer(){

alert('ok');

  }


}
