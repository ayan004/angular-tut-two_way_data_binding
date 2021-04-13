// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';

// @NgModule({
//   declarations: [
//     AppComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MsgComponent } from './msg/msg.component';
import { AliasComponent } from './alias/alias.component';
import { TextSizeComponent } from './textsize/textsize.component';
// import { SelectBoxComponent } from './selectbox.component';
// import { CaseComponent } from './case.component';
// import { UpperCaseComponent } from './uppercase.component';
import { TextBoxComponent } from './textbox/textbox.component';
import { SelectBoxComponent } from './selectbox/selectbox.component';
import { CaseComponent } from './case/case.component';
import { UpperCaseComponent } from './uppercase/uppercase.component';
// import { TextsizeComponent } from './textsize/textsize.component';
@NgModule({
  imports: [BrowserModule,
    FormsModule],
  declarations: [AppComponent,
    MsgComponent,
    AliasComponent,
    TextBoxComponent,
    TextSizeComponent,
    SelectBoxComponent,
    CaseComponent,
    UpperCaseComponent,
    // SelectBoxComponent,
    // CaseComponent,
    // UpperCaseComponent,
    // TextboxComponent,
    // TextsizeComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
