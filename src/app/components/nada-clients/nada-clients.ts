
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
      subtitle: 'سباقات الخيل'
    },
    {
      name: 'مستشفى نادي',
      subtitle: 'سباقات الخيل'
    },
    {
      name: 'شركة دواجن',
      subtitle: 'الوطنية'
    },
    {
      name: 'شركة دواجن',
      subtitle: 'الرمحية'
    },
    {
      name: 'شركة دواجن',
      subtitle: 'التنمية'
    }
  ];

  constructor() { }
}