import { Directive, ElementRef, HostListener, Inject, Input, PLATFORM_ID, Renderer2 } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appHeader]',
  standalone: true
})
export class HeaderDirective {
  @Input() customClass: string; // Input property for custom CSS class

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    if (isPlatformBrowser(this.platformId)) {
      this.toggleNavbar();
    }
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.toggleNavbar(); // Initial state check
    }
  }

  toggleNavbar(): void {
    if (isPlatformBrowser(this.platformId)) {
      const screenWidth = window.innerWidth;
      const navbar = this.el.nativeElement.querySelector('.navbar');

      if (screenWidth < 768) {
        this.renderer.addClass(navbar, 'collapsed');
      } else {
        this.renderer.removeClass(navbar, 'collapsed');
      }

      // Apply custom styling
      this.applyCustomStyles(navbar);
    }
  }

  applyCustomStyles(navbar: HTMLElement): void {
    // Add your custom styling here
    if (this.customClass) {
      this.renderer.addClass(navbar, this.customClass);
    }
    // Add more styles as needed
  }

  @HostListener('click', ['$event'])
  onClick(event: Event): void {
    if (isPlatformBrowser(this.platformId)) {
      const navbar = this.el.nativeElement.querySelector('.navbar');
      const isTogglerClicked = event.target && (event.target as HTMLElement).classList.contains('navbar-toggler');

      if (isTogglerClicked) {
        if (navbar.classList.contains('collapsed')) {
          this.renderer.removeClass(navbar, 'collapsed');
        } else {
          this.renderer.addClass(navbar, 'collapsed');
        }
      }
    }
  }
}
