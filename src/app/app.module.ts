import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SelectBoxComponent, ListFilterPipe, SelectBoxModule } from 'projects/select-box/src/public_api';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TestFormControlComponent } from './comp/test-form-control/test-form-control.component';

@NgModule({
  declarations: [
    AppComponent,
    TestFormControlComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    SelectBoxModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
