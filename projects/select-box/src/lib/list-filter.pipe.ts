import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'listFilter'
  })
  export class ListFilterPipe implements PipeTransform {
  
    transform(list: string[], filterText: string): any {
      if(filterText == '') return list;
      if(!list) return list;
      return list ? list.filter(item => item.search(new RegExp(filterText, 'i')) > -1) : [];
    }
  
  }