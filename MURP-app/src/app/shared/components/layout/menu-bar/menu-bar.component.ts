import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {
  @Output() sideNavToggled = new EventEmitter<void>();

  constructor(private readonly router: Router) {}

  ngOnInit(): void {
  }

  toggleSidebar() {
    this.sideNavToggled.emit();
  }

  onLoggedout() {
    localStorage.removeItem('isLoggedin');
    this.router.navigate(['/login']);
  }

}
