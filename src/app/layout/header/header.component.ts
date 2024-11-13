import {Component, inject} from '@angular/core';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';
import {SidebarModule} from 'primeng/sidebar';
import {ButtonModule} from 'primeng/button';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    TranslatePipe,
    SidebarModule,
    ButtonModule,
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  translate = inject(TranslateService)
  router = inject(Router)
  sidebarVisible: boolean = false;

  setLang(lang:string){
    this.translate.use(lang)
  }
}
