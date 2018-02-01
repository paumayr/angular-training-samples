import { Directive, Input } from '@angular/core';

@Directive({
  selector: 'app-link'
})
export class LinkDirective {

  constructor() { }

  @Input() title: string;
  @Input() href: string;
}
