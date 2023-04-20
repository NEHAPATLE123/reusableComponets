import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent implements OnInit {

@Input() propertyBin! : boolean;
@Output() customeEve : EventEmitter<boolean> = new EventEmitter<boolean>()

  constructor() { }


  ngOnInit(): void {
  }

  onclick(){
    this.propertyBin = !this.propertyBin
    this.customeEve.emit(this.propertyBin)
  }

}
