import { Component } from '@angular/core';

@Component({
  selector: 'app-table-comp',
  templateUrl: './table-comp.component.html',
  styleUrls: ['./table-comp.component.css']
})
export class TableCompComponent {

  public data = {
    percent: 0.15,
    money: 123.43,
    numb: 23.456,
    str: 'Hello User', 
    date: new Date(2015, 3, 25),
  } as Info;
}

export class Info {
  public percent: number;
  public numb: number;
  public money: number;

  public str: string; 
  public date: Date;
}
