import { NgModule } from '@angular/core';
import { SelectBoxComponent } from './select-box.component';
import { ListFilterPipe } from './list-filter.pipe';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ListItem } from './list-item.domain';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule, 
    DragDropModule
  ],
  declarations: [SelectBoxComponent, ListFilterPipe],
  exports: [SelectBoxComponent, ListFilterPipe]
})
export class SelectBoxModule { }
