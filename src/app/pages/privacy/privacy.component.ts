import { Component } from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [
    TranslatePipe
  ],
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.css'
})
export class PrivacyComponent {

  email = 'support@unicell.ge'

}
