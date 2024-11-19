import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'c-c2cb1',
  templateUrl: './c2cb1.container.html',
  styleUrls: ['./c2cb1.container.css','./c2cb1v2.container.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class C2cb1Container implements OnInit,AfterViewInit {
  // @Input() c2cb1Name!: string;
  @Input() c2cb1Name: string = "";
  @Input() fontSize: string = "10px";
  @Input() padding: string = "7px 15px";
  @Input() borderRadius: string = "0";

  constructor() {
  }

  ngOnInit(): void {

  }



  ngAfterViewInit(): void {

    // console.log(this.fontSize)

  }




}
