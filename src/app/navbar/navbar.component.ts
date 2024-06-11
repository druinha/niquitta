import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private meta: Meta, private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Update meta tags based on the current route
        this.updateMetaTags(event.url);
      }
    });
  }

  private updateMetaTags(url: string): void {
    // Logic to update meta tags based on the current route
    if (url === '/') {
      this.meta.updateTag({
        name: 'Rengøring',
        content: 'Rengøring, ren, clean, cleaning',
      });
    } else if (url === '/about') {
      this.meta.updateTag({
        name: 'Rengøring',
        content: 'Rengøring, ren, clean, cleaning',
      });
    } else {
      // Default meta tags for other routes
      this.meta.updateTag({
        name: 'Rengøring',
        content: 'Rengøring, ren, clean, cleaning',
      });
    }
  }
}
