import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {typeofExpr} from "@angular/compiler/src/output/output_ast";

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  @Input() srcIcon?: string;
  @Input() size:number | number[];
  @Input() color?;
  @Input() nameIcon: string;
  @HostBinding('style.display') display = 'inline-flex';
  constructor() { }

  ngOnInit() {
    this.size = (this.size)?this.size:16;
  }

  getXlinkHref() {
    return this.srcIcon ? this.srcIcon : '#' + this.nameIcon;
  }

  getColorClass() {
    if (this.color) {
      return 'bz-icn--' + this.color;
    }
    return 'bz-icn';
  }
  getSizeStyle(){
    if(typeof this.size === 'number'){
      return {'width': this.size + 'px', 'height': this.size + 'px'}
    } else if((this.size instanceof  Array) && typeof this.size[0] === 'number' && typeof this.size[1] === 'number'){
      return {'width': this.size[0] + 'px', 'height': this.size[1] + 'px'}
    } else {
      return {};
    }

  }
  getSizeHeight(){

  }



}
