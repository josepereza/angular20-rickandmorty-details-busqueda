import { Component, DOCUMENT, HostListener, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  // Inyectamos el token DOCUMENT de forma segura
  private document = inject(DOCUMENT);
  
  public isScrolled = signal(false);

  // El decorador @HostListener ahora escucha eventos en el `document`
  @HostListener('document:scroll', [])
  onWindowScroll(): void {
    // Verificamos si existe el documentElement y el scrollY
    const scrollPosition = this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
    this.isScrolled.set(scrollPosition > 10);
  }
}
