import { NgModule } from '@angular/core';
import { SelectBoxComponent } from './select-box.component';
import { ListFilterPipe } from './list-filter.pipe';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule, 
    DragDropModule
  ],
  declarations: [SelectBoxComponent, ListFilterPipe],
  exports: [SelectBoxComponent, ListFilterPipe]
})
export class SelectBoxModule { }
