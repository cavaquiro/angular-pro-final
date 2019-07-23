import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from "../../../auth/shared/services/auth/auth.service";

@Component({
  selector: 'app-main-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent {
  @Input()
  user: User;
  @Output()
  logout = new EventEmitter<any>();
  logOutUser(){
    this.logout.emit();
  }

}
