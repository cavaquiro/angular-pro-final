import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-main-nav',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
