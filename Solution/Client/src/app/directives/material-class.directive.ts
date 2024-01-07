import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: 'i'
})
export class MaterialClassDirective {
  @HostBinding('class') className = 'material-symbols-outlined';
}
