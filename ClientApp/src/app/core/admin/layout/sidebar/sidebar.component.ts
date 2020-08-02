import { Component, OnInit } from '@angular/core';
import { childRoutes } from '../../../../core/admin/child-routes';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  showMenu = false;
  routes = childRoutes;

  constructor() { }

  ngOnInit(): void {
  }
}
