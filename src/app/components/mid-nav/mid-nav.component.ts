import { Component } from '@angular/core';

@Component({
  selector: 'app-mid-nav',
  templateUrl: './mid-nav.component.html',
  styleUrls: ['./mid-nav.component.css']
})
export class MidNavComponent {
  checked: boolean = true;
  value: string | undefined;
}
