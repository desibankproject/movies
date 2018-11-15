import { Component } from '@angular/core';
import { Fact } from './model/fact.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private name = 'movies';
  private email = "Welcome to Mathematics!!!!!!!!!!";
  private pnum:number=3;
  private result:number=0;
  private results:Fact[]=[];
  private sno:number=1;

  public deleteFact(data):void{
     this.results=this.results.filter(t => t!=data);
    console.log(data);
  }

  /**
   * This is method definition for TypeScript
   */
  public calFact() : void {
    console.log("Fact is called!!!!!!!!!!");
    let fact=1;
    for(let x=2;x<=this.pnum;x++){
       fact=x*fact;
    }

    this.result=fact;
    let row=new Fact(this.sno,this.pnum,fact);
    this.results.push(row);
    this.sno=this.sno+1;
    
  } 

}



