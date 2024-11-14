import {Component, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import { PrimeNGConfig } from 'primeng/api';
import {Lara} from 'primeng/themes/lara';
import {HeaderComponent} from './layout/header/header.component';
import {FooterComponent} from './layout/footer/footer.component';
import { definePreset } from 'primeng/themes';

const   MyPreset = definePreset(Lara, {
  primitive: {
    purple: {
      50: '#f5f3ff',
      100: '#ede9fe',
      200: '#ddd6fe',
      300: '#c4b5fd',
      400: '#a78bfa',
      500: '#8b5cf6',
      600: '#7c3aed',
      700: '#6d28d9',
      800: '#5b21b6',
      900: '#4c1d95',
      950: '#2e1065'
    },
  },
  semantic: {
    primary: {
      50: '{purple.50}',
      100: '{purple.100}',
      200: '{purple.200}',
      300: '{purple.300}',
      400: '{purple.400}',
      500: '{purple.500}',
      600: '{purple.600}',
      700: '{purple.700}',
      800: '{purple.800}',
      900: '{purple.900}',
    },
  },
});

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
  themeItem = this.config.theme.set({
    preset: MyPreset,
    options: {
      prefix: 'p',
      darkModeSelector: '.primeng-dark-mode',
      cssLayer: false,
    },
  });







  langs = this.translate.addLangs(["en", "ka"]);
  defLang= this.translate.setDefaultLang('ka');

  title = 'unicell';
}
