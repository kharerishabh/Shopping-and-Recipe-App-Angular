import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[appDropDown]'
})
export class DropDownDirective {
//To Open and Close the dropdown from the button
// @HostBinding('class.open') isOpen = false
// @HostListener('click') toggleOpen (){
//     this.isOpen = !this.isOpen;
// }

//To open from the button and close the dropdown from anywhere click
@HostBinding('class.open') isOpen = false;
@HostListener('document:click', ['$event']) toggleOpen(event: Event){
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
}
constructor(private elRef: ElementRef){}
}