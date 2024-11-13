import { Component } from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import {Accordion, AccordionContent, AccordionHeader, AccordionPanel} from 'primeng/accordion';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    TranslatePipe,
    Accordion,
    AccordionPanel,
    AccordionHeader,
    AccordionContent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  head_data = [
    {
      class:'gear',
      title:'GEAR_T',
      desc:'GEAR_DESC'
    },
    {
      class:'ppl',
      title:'PPL_T',
      desc:'PPL_DESC'
    },
    {
      class:'like',
      title:'LIKE_T',
      desc:'LIKE_DESC'
    },
  ];

  mid_data = [
    {
      class:'globe',
      title:'GLOBE_T',
      desc:'GLOBE_DESC'
    },
    {
      class:'sim',
      title:'SIM_T',
      desc:'SIM_DESC'
    },
    {
      class:'phone',
      title:'PHONE_T',
      desc:'PHONE_DESC'
    },
  ]

  faxData = [
    {
      title:'FAQ_1_T',
      content:'FAQ_1_A',
      value: 0
    },
    {
      title:'FAQ_2_T',
      content:'FAQ_2_A',
      value: 1
    },
    {
      title:'FAQ_3_T',
      content:'FAQ_3_A',
      value: 2
    },
    {
      title:'FAQ_4_T',
      content:'FAQ_4_A',
      value: 3
    },
  ]
}
