import {
  AfterViewInit,
  Component,
  ElementRef, HostListener, Input,
  QueryList,
  ViewChild,
  ViewChildren,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'c-c1g15',
  templateUrl: './c1g15.container.html',
  styleUrl: './c1g15.container.css',
  encapsulation: ViewEncapsulation.None
})
export class C1g15Container implements AfterViewInit{

  @Input() pc_ci!: HTMLDivElement;
  @Input() imageUrl!: string;

  @ViewChildren('c1g15_c') children !: QueryList<ElementRef>;

  style:any ;
  constructor() {

  }

  ngAfterViewInit(): void {
    this.style = this.pc_ci.style;
    this.children.forEach(child => {
      child.nativeElement.style.backgroundImage = `url('${this.imageUrl}')`;
    });
  }

  @HostListener('mouseover')
  onMouseOver() {
    this.style.transform = "translateX(-35px)";
    this.style.opacity = "0";
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    this.style.transition = 'transform 2s ease, opacity 1s ease';
    this.style.transform = "translateX(0)";
    this.style.opacity = "1";
  }



}
