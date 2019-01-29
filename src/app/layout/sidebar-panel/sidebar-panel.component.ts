import { Component, OnInit } from '@angular/core';
import { MENU_ITEMS } from 'src/app/side-menu';

@Component({
  selector: 'app-sidebar-panel',
  templateUrl: './sidebar-panel.component.html',
  styleUrls: ['./sidebar-panel.component.scss']
})
export class SidebarPanelComponent implements OnInit {

  menuItems = MENU_ITEMS;
  isMenuOptionExpanded = false;

  constructor() { }

  ngOnInit() {
  }

  toggleExpand() {
    this.isMenuOptionExpanded = !this.isMenuOptionExpanded;
  }

}
