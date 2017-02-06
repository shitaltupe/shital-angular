import { Directive,HostListener,HostBinding } from '@angular/core';

@Directive({
  selector: '[dropdown]'//dropdown instead appDropdown
})
export class DropdownDirective {

  @HostBinding('class.open') shouldDisplay : Boolean;

  @HostListener('click') onDropDownClicked(){
    this.shouldDisplay = true;
  }

  @HostListener('mouseleave') onDropDownLeft() {
    this.shouldDisplay = false;
  }
}
