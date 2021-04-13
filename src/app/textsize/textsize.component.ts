// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-textsize',
//   templateUrl: './textsize.component.html',
//   styleUrls: ['./textsize.component.css']
// })
// export class TextsizeComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'size-app',
  templateUrl: './textsize.component.html'
})
export class TextSizeComponent {
  @Input() cdTextSize: number;
  @Output() cdTextSizeChange = new EventEmitter<number>();
  plus() {
    this.cdTextSize = this.cdTextSize + 1;
    this.emitSize();
  }
  minus() {
    this.cdTextSize = this.cdTextSize - 1;
    this.emitSize();
  }
  emitSize() {
    this.cdTextSizeChange.emit(this.cdTextSize);
  }
}
