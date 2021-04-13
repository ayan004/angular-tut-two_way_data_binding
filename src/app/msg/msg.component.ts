// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-msg',
//   templateUrl: './msg.component.html',
//   styleUrls: ['./msg.component.css']
// })
// export class MsgComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'msg-app',
  templateUrl: './msg.component.html'
})
export class MsgComponent {
  @Input() cdMsg: string;
  @Output() cdMsgChange = new EventEmitter<string>();
  update(val: any) {
    this.cdMsg = val.target.value;
    this.cdMsgChange.emit(this.cdMsg);
  }
}
