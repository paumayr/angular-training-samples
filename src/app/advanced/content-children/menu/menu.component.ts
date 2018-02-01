import { Component, OnInit, ContentChildren, QueryList } from '@angular/core';
import { LinkDirective } from '../link.directive';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  @ContentChildren(LinkDirective) links: QueryList<LinkDirective>; 

}
