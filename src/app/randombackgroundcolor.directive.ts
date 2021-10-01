import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appRandombackgroundcolor]'
})
export class RandombackgroundcolorDirective {
  colors=['red' , 'blue' , 'green']
@HostBinding('style.backgroundColor') backgroundcolor = this.colors[Math.floor(Math.random()*this.colors.length)]
  constructor() { }
}
