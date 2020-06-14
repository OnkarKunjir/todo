import { Component, OnInit, Input , Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-status-selector',
  templateUrl: './status-selector.component.html',
  styleUrls: ['./status-selector.component.css']
})
export class StatusSelectorComponent implements OnInit {
  index:number = 0;

  // list of avilable status options
  optionList: String[] = [
    "Yet to start",
    "Working",
    "Finished"
  ];
  // place icons according to optionList
  // optionListIcons = [
  //   "hourglass_bottom",
  //   "psychology",
  //   "assistant_photo"
  // ];
  
  
  
  optionListIcons : {[key:string]:string}  = {
    "Yet to start" : "hourglass_bottom",
    "Working" : "psychology",
    "Finished" : "assistant_photo"
  };

  @Input() selectedStatus:String;
  @Output() newStatus: EventEmitter<String> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    this.optionList.filter( (l, i) =>{
      if(l == this.selectedStatus){
        this.index = i;
      }
    })  
  }


  updateStatus():void{
    // update status of string
    this.index +=  1;
    if(this.index >= this.optionList.length){
      this.index = 0; 
    }
    this.selectedStatus = this.optionList[this.index];
    this.newStatus.emit(this.selectedStatus);
  }

}
