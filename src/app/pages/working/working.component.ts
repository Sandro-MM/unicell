import { Component } from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-working',
  standalone: true,
  imports: [
    TranslatePipe
  ],
  templateUrl: './working.component.html',
  styleUrl: './working.component.css'
})
export class WorkingComponent {

}
