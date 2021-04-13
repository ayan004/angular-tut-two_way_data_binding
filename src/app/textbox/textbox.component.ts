// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-textbox',
//   templateUrl: './textbox.component.html',
//   styleUrls: ['./textbox.component.css']
// })
// export class TextboxComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import { Component } from '@angular/core';
@Component({
  selector: 'text-app',
  templateUrl: './textbox.component.html'
})
export class TextBoxComponent {
  myMsg = 'Hello World!';
  updateMyMsg(event) {
    this.myMsg = event.target.value;
  }
}
