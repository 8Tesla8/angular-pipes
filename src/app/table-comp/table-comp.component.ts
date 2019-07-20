import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-comp',
  templateUrl: './table-comp.component.html',
  styleUrls: ['./table-comp.component.css']
})
export class TableCompComponent implements OnInit {

  public data = {
    // currency: string;
    persentage: 0.15,
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
  // public currency: number;
  public persentage: number;
  public str: string; //lower upper
  public date: Date;
}
