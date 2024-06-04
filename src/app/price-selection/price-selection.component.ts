import { Component } from '@angular/core';

@Component({
  selector: 'app-price-selection',
  templateUrl: './price-selection.component.html',
  styleUrls: ['./price-selection.component.scss'],
})
export class PriceSelectionComponent {
  selectedPackage: string = '';
  duration: number | null = null;
  houseRate = 300; // DKK per hour
  principalRate = 400; // DKK per hour
  urgentRate = 500; // DKK per hour
  companyRate = 450; // DKK per hour
  totalPrice: number = 0;

  hours: number[] = [1, 2, 3, 4, 5];

  calculatePrice(): void {
    if (this.selectedPackage && this.duration) {
      switch (this.selectedPackage) {
        case 'houses':
          this.totalPrice = this.houseRate * this.duration;
          break;
        case 'principal':
          this.totalPrice = this.principalRate * this.duration;
          break;
        case 'urgent':
          this.totalPrice = this.urgentRate * this.duration;
          break;
        case 'company':
          this.totalPrice = this.companyRate * this.duration;
          break;
        default:
          this.totalPrice = 0;
          break;
      }
    } else {
      this.totalPrice = 0;
    }
  }
}
