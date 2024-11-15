import { Component } from '@angular/core';
import {InputTextModule} from 'primeng/inputtext';
import {TextareaModule} from 'primeng/textarea';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-help-page',
  standalone: true,
  imports: [
    InputTextModule,
    TextareaModule,
    TranslatePipe
  ],
  templateUrl: './help-page.component.html',
  styleUrl: './help-page.component.css'
})
export class HelpPageComponent {

}
