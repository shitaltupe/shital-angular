import { Component } from '@angular/core';//remove oninit

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent {

  constructor() { }

  
  public onEvenBindingClicked () {  //add this method
    alert('yes u caught it::::');
  }
}
