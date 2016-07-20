import { Component } from '@angular/core';
import titleContains = protractor.until.titleContains;

@Component({
  moduleId: module.id,
  selector: 'app-root',
  //template: `<h1>  Podemos: {{title}} </h1>`, 
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})

export class AppComponent {
  title: string = 'app works!';
  x: number=0;

  constructor (){
    this.title+=' sssddd';

  }

}
