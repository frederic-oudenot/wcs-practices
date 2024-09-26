import { Component, EventEmitter, Output } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { DisplayComponent } from '../display/display.component';

@Component({
  selector: 'app-caculator',
  standalone: true,
  imports: [ButtonComponent, DisplayComponent],
  templateUrl: './caculator.component.html',
  styleUrl: './caculator.component.scss',
})
export class CaculatorComponent {
  a: number = 0;
  b: number = 0;
  operator: string = '';
  result: string | number = 0;

  calculate(): void {
    let result : string | number = "";
    switch (this.operator) {
      case '+':
        result = this.a + this.b;
        break;
      case '-':
        result = this.a - this.b;
        break;
      case '*':
        result = this.a * this.b;
        break;
      case '/':
        this.a && this.b === 0 ? result="Error" : (result = this.a / this.b);
        result;
        break;
      default:
        break;
    }
    this.result = result;
  }

  selectOperator(selectOperator: string): void {

    switch (selectOperator) {
      case '+':
        this.operator = '+';
        break;
      case '-':
        this.operator = '-';
        break;
      // @ts-ignore
      case '*':
        this.operator = '*';
      case '/':
        this.operator = '/';
        break;
      default:
        break;
    }
    this.result = this.operator;
  }

  generateRandomNumber() {
    if (!this.a) {
      this.a = Math.round(Math.random() * 10);
      this.result = this.a;
    } else {
      this.b = Math.round(Math.random() * 10);
      this.result = this.b;
    }
  }

  reset() {
    this.a = 0;
    this.b = 0;
    this.operator = '';
    this.result = 0;
  }
}
