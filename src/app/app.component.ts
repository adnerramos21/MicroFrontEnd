import { Component } from '@angular/core';
import { MENU_ITEMS } from './side-menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isOpened = true;
  isMenuOptionExpanded = false;
  menuItems = MENU_ITEMS;

  toggleExpand() {
    console.log('toggle');
    this.isMenuOptionExpanded = !this.isMenuOptionExpanded;
  }
}
