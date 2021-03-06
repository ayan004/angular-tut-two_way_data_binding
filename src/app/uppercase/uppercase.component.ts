// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-uppercase',
//   templateUrl: './uppercase.component.html',
//   styleUrls: ['./uppercase.component.css']
// })
// export class UppercaseComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import { Component } from '@angular/core';
import { Employee } from '../employee';
@Component({
  selector: 'upper-case-app',
  templateUrl: './uppercase.component.html'
})
export class UpperCaseComponent {
  employee = new Employee(100, 'Mahesh Sharma');
  toUpper(val: string) {
    this.employee.name = val.toUpperCase();
  }
}
