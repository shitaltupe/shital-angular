import { Component } from '@angular/core';

@Component({
  selector: 'app-projectionindex',
  templateUrl: './projectionindex.component.html',
  styleUrls: ['./projectionindex.component.css']
})
export class ProjectionindexComponent {
private myData : String;
  public constructor() {
this.myData='Hello Codekul'; //string interpolation
   }
}
