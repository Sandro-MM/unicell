import {Component, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import { PrimeNGConfig } from 'primeng/api';
import {Lara} from 'primeng/themes/lara';
import {HeaderComponent} from './layout/header/header.component';
import {FooterComponent} from './layout/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  translate = inject(TranslateService)
  config = inject(PrimeNGConfig)
  themeItem = this.config.theme.set({ preset: Lara, options: {
      darkModeSelector: false,
    }});
  langs = this.translate.addLangs(["en", "ka"]);
  defLang= this.translate.setDefaultLang('ka');

  title = 'unicell';
}
