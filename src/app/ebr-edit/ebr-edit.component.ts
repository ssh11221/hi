import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-ebr-edit',
  templateUrl: './ebr-edit.component.html',
  styleUrls: ['./ebr-edit.component.css']
})
export class EbrEditComponent {
     @Input() Name!: string;
     @Output() rbsEvent= new EventEmitter<any>();
     @Output() CanceledChange=new EventEmitter();
    
     SendToRbs(){
        this.rbsEvent.emit(this.Name);
     }
     upd(event:any){
        this.Name=event.target.value;
     }

     CancelChange(){

         this.CanceledChange.emit();
        //  alert("name  =  "+this.Name);
     }


}
