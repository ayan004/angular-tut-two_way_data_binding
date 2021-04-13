// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-case',
//   templateUrl: './case.component.html',
//   styleUrls: ['./case.component.css']
// })
// export class CaseComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'case-app',
  templateUrl: './case.component.html'
})
export class CaseComponent {
  @Input() myName: string;
  @Output() myNameChange = new EventEmitter<string>();
  changeCase(val: string) {
    if (val == 'upper') {
      this.myName = this.myName.toUpperCase();
    } else {
      this.myName = this.myName.toLowerCase();
    }
    this.myNameChange.emit(this.myName);
  }
}
