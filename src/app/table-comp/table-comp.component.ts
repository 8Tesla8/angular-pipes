import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-comp',
  templateUrl: './table-comp.component.html',
  styleUrls: ['./table-comp.component.css']
})
export class TableCompComponent implements OnInit {

  public data = {
    money: 123.43,
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

export class Info {
  public numb: number;
  public bigNumb: number;
  public money: number;

  public str: string; 
  public date: Date;
}
