import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { ListFilterPipe } from './list-filter.pipe';

export const AUI_SELECT_BOX_ACCESSOR : any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SelectBoxComponent),
  multi: true,
};

@Component({
  selector: 'aui-select-box',
  templateUrl: './select-box.component.html',
  styles: [
    `
    .selectbox-left-area, .selectbox-buttons-area, .selectbox-right-area{
      float: left;
      padding: 20px;
    } 
    .selectbox-preview{
      border-style: ridge;
      background-color:#e0e0e0;
    }
    .selectbox-left, .selectbox-right, .selectbox-search{
      width: 250px;
    }
    `
  ],
  providers: [AUI_SELECT_BOX_ACCESSOR, ListFilterPipe]
})
export class SelectBoxComponent implements OnInit, ControlValueAccessor {

  constructor() { }

  /* parameter used to pass in the id of the element*/
  @Input() id;
  /* paramter used to pass in the list items*/
  @Input() list;
  /* paramter used to set the size of select box, default value is 5*/
  @Input() size;
  /* option to  turn on sort feature*/
  @Input() sort;
  /* option to turn on search feature */
  @Input() search;

  /* Id for the component */
  elementId:string;

  /* cloned copy of the list passed in */
  originalList:string[] = [];
  /* selected items that will be passed out */
  selectedList:string[] = [];

  /* selected items in left side that will be moved to right*/
  leftSelectedList:string[] = [];
  /* selected items in right side that will be moved to left*/
  rightSelectedList:string[] = [];

  /* filter text used to filter items on the left side */
  leftFilterText: string = '';
  /* filter text used to filter items on the right side */
  rightFilterText: string = '';

  ngOnInit() {
    if(!this.id) this.id='';
    if(!this.size) this.size = 5;

    this.elementId = this.id==''? 'aui-select-box' : 'aui-select-box-' + this.id;
    this.originalList.push.apply(this.originalList, this.list);
  }

  
  addOption(){
    this.originalList = this.originalList.filter( 
      ( el ) => !this.leftSelectedList.includes( el ) 
    );
    
    if(this.selectedList==null) this.selectedList = [];
    this.selectedList.push.apply(this.selectedList, this.leftSelectedList);

    this.rightSelectedList = [];
    this.leftSelectedList = [];
  } 

  addOptionbyDrag(event: CdkDragDrop<string[]>){
    if (event.previousContainer === event.container) {
      if(this.sort && this.rightSelectedList.length==1){ //sort within same container
        this.selectedList.splice(event.previousIndex,1);
        this.selectedList.splice(event.currentIndex, 0, this.rightSelectedList[0]);
        this.rightSelectedList = []
      }
    } else {
      this.addOption();                       
    }
  }
  
  removeOption(){
    this.selectedList = this.selectedList.filter( 
      ( el ) => !this.rightSelectedList.includes( el ) 
    );
    
    if(this.originalList==null) this.originalList = [];
    this.originalList.push.apply(this.originalList, this.rightSelectedList);

    this.leftSelectedList = [];
    this.rightSelectedList = [];
  }

  removeOptionbyDrag(event: CdkDragDrop<string[]>){
    if (event.previousContainer === event.container) {
      if(this.sort && this.leftSelectedList.length==1){//sort within same container
        this.originalList.splice(event.previousIndex,1);
        this.originalList.splice(event.currentIndex, 0, this.leftSelectedList[0]);
        this.leftSelectedList = []
      }
    } else {
      this.removeOption();                       
    }
  }

  /* Methods to implement ControlValueAccessor */
  writeValue(value: string[]): void {
    this.selectedList = value;
  }
  onChange:any;
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  onTouched:any;
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void { }

}