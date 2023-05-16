import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ebr-list',
  templateUrl: './ebr-list.component.html',
  styleUrls: ['./ebr-list.component.css']
})
export class EbrListComponent {
     @Output() editEvent= new EventEmitter();

     EMIT(){
         this.editEvent.emit("Suru");
     }
}
