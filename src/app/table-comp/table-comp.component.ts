import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-comp',
  templateUrl: './table-comp.component.html',
  styleUrls: ['./table-comp.component.css']
})
export class TableCompComponent implements OnInit {

  public data = {
    // currency: string;
    numb: 0.15,
    bigNumb: 23.456,
    str: 'Hello User', 
    date: new Date(2015, 3, 25),
  } as Info;

  constructor() {
  }

  ngOnInit() {
  }

}

// CurrencyPipe: Formats a currency
// PercentPipe: Percents Format
// UpperCasePipe: converts the string to uppercase
// LowerCasePipe: converts a string to lowercase
// DatePipe: format date
// DecimalPipe: sets the number format
// SlicePipe: truncates the string

export class Info {
  public numb: number;
  public bigNumb: number;

  public str: string; 
  public date: Date;
}
