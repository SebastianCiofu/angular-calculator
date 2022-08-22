import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit {
  current = '0';
  firstNumb = null;
  secondNumb = false;
  operator = null;
  close = true;
  expand = false;
  theme = false;

  constructor() {}

  ngOnInit() {}

  public getComma() {
    this.current.includes('.') ? this.current : (this.current += '.');
  }

  public getNumber(numb: string) {
    if (this.secondNumb) {
      this.current = numb;
      this.secondNumb = false;
    } else {
      this.current === '0' ? (this.current = numb) : (this.current += numb);
    }
  }

  public getSymbol(symb: string) {
    if (this.firstNumb === null) {
      this.firstNumb = Number(this.current);
    } else if (this.operator) {
      const result = this.calcul(this.operator, Number(this.current));
      this.current = String(result);
      this.firstNumb = result;
    }
    this.operator = symb;
    this.secondNumb = true;
  }

  public calcul(operator: string, current: number) {
    if (operator === '+') {
      return (this.firstNumb += current);
    } else if (operator === '-') {
      return (this.firstNumb -= current);
    } else if (operator === '/') {
      return (this.firstNumb /= current).toFixed(2);
    } else if (operator === 'X') {
      return (this.firstNumb *= current);
    } else if (operator === '=') {
      return current;
    }
  }

  public allClear() {
    this.current = '0';
    this.firstNumb = null;
    this.secondNumb = false;
    this.operator = null;
  }
}
