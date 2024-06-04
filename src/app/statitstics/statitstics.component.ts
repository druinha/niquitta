import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-statitstics',
  templateUrl: './statitstics.component.html',
  styleUrls: ['./statitstics.component.scss'],
})
export class StatitsticsComponent {
  @ViewChild('years') yearsElement!: ElementRef;
  @ViewChild('business') businessElement!: ElementRef;
  @ViewChild('homes') homesElement!: ElementRef;

  yearsAnimated = false;
  businessAnimated = false;
  homesAnimated = false;

  isInViewport(element: ElementRef): boolean {
    const rect = element.nativeElement.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  animateNumbers(element: ElementRef, target: number): void {
    let current = 0;
    const increment = target / 100;

    const intervalId = setInterval(() => {
      current += increment;
      element.nativeElement.textContent = Math.round(current).toString();
      if (current >= target) {
        clearInterval(intervalId);
        element.nativeElement.textContent = target.toString();
      }
    }, 40);
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    if (!this.yearsAnimated && this.isInViewport(this.yearsElement)) {
      this.animateNumbers(this.yearsElement, 16);
      this.yearsAnimated = true;
    }
    if (!this.businessAnimated && this.isInViewport(this.businessElement)) {
      this.animateNumbers(this.businessElement, 65);
      this.businessAnimated = true;
    }
    if (!this.homesAnimated && this.isInViewport(this.homesElement)) {
      this.animateNumbers(this.homesElement, 130);
      this.homesAnimated = true;
    }
  }
}
