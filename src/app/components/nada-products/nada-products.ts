
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nada-products',
  imports: [CommonModule],
  templateUrl: './nada-products.html',
  styleUrl: './nada-products.css'
})
export class NadaProducts {
  
  products = [
    {
      name: 'نشارة حضارة الودائن',
      icon: 'sawdust'
    },
    {
      name: 'نشارة اسطبلات الخيل',
      icon: 'horse-stable'
    },
    {
      name: 'كسار احتساب مضمار السباق',
      icon: 'track-chips'
    },
    {
      name: 'نشارة الياف النخيل',
      icon: 'palm-fiber'
    },
    {
      name: 'الواح بديل الخشب WPC',
      icon: 'wpc-boards'
    },
    {
      name: 'الواح الخشب MDF',
      icon: 'mdf-boards'
    },
    {
      name: 'اعلاف حيوانات مركبة',
      icon: 'animal-feed'
    }
  ];

  constructor() { }
}