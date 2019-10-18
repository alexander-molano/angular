import { Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appCedinsiDirectiva]'
})
export class CedinsiDirectivaDirective {

  constructor(nombreElementRef: ElementRef) {
    nombreElementRef.nativeElement.style.background = "yellow";
   }

}
