import { Component } from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import {InputTextModule} from 'primeng/inputtext';
import {FloatLabelModule} from 'primeng/floatlabel';
import {CheckboxModule} from 'primeng/checkbox';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    TranslatePipe,
    InputTextModule,
    FloatLabelModule,
    CheckboxModule
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {

  protected readonly TranslatePipe = TranslatePipe;
}
