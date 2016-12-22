import { Component } from '@angular/core';//remove oninit

@Component({
  selector: 'app-propertybinding',
  templateUrl: './propertybinding.component.html',
  styleUrls: ['./propertybinding.component.css']
})
export class PropertybindingComponent {

  private inputValue : String; //add this 2 
  private inputType : String;
  

  constructor() { 
this.inputValue = 'okay';  //add this 2
this.inputType = 'input';
  }

}
