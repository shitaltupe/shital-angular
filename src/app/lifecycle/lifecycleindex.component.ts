import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycleindex',
  templateUrl: './lifecycleindex.component.html',
  styleUrls: ['./lifecycleindex.component.css']
})
export class LifecycleindexComponent {
private dt : number;
  constructor() { 

  }

changeDate(){
  this.dt =new Date().getMilliseconds();
}
}
