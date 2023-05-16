import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-rbs',
  templateUrl: './rbs.component.html',
  styleUrls: ['./rbs.component.css']
})
export class RbsComponent {
     @Input() Name!: string;
     @Output() BackEvent=new EventEmitter();

     Back(){
        this.BackEvent.emit();
     }
}
