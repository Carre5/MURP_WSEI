import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[AddOrderDirective]'
})
export class OrderDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
