// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-alias',
//   templateUrl: './alias.component.html',
//   styleUrls: ['./alias.component.css']
// })
// export class AliasComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'alias-app',
  templateUrl: './alias.component.html'
})
export class AliasComponent {
  @Input('myCity') strCity: string;
  @Output('myCityChange') cityObj = new EventEmitter<string>();
  emitCity() {
    this.cityObj.emit(this.strCity);
  }
}
// export class AliasComponent {
//   @Input() myCity: string;
//   @Output() myCityChange = new EventEmitter<string>();
//   emitCity() {
//     this.myCityChange.emit(this.myCity);
//   }
// }
