// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-selectbox',
//   templateUrl: './selectbox.component.html',
//   styleUrls: ['./selectbox.component.css']
// })
// export class SelectboxComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }


import { Component, EventEmitter, Input } from '@angular/core';
@Component({
  selector: 'select-app',
  templateUrl: './selectbox.component.html'
})
export class SelectBoxComponent {
  @Input() cdColors: Array<string>
  myColor = 'GREEN';
}
