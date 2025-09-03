
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nada-clients',
  imports: [CommonModule],
  templateUrl: './nada-clients.html',
  styleUrl: './nada-clients.css'
})
export class NadaClients {
  
  clients = [
    {
      name: 'محجر نادي',
      subtitle: 'سيافات الخيل'
    },
    {
      name: 'مستشفى نادي',
      subtitle: 'سباقات الخيل'
    },
    {
      name: 'شركة جوادين',
      subtitle: 'الوطنية'
    },
    {
      name: 'شركة جوادين',
      subtitle: 'الرحبة'
    },
    {
      name: 'شركة جوادين',
      subtitle: 'التنمية'
    }
  ];

  constructor() { }
}