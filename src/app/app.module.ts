import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SelectBoxComponent, ListFilterPipe, SelectBoxModule } from 'projects/select-box/src/public_api';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    SelectBoxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
