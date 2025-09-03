import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NadaHero } from "./components/nada-hero/nada-hero";
import { NadaIntro } from "./components/nada-intro/nada-intro";
import { NadaAbout } from './components/nada-about/nada-about';
import { NadaVision } from './components/nada-vision/nada-vision';
import { NadaMessage } from './components/nada-message/nada-message';
import { NadaValues } from './components/nada-values/nada-values';
import { NadaProducts } from './components/nada-products/nada-products';
import { NadaDetails } from './components/nada-details/nada-details';
import { NadaOperations } from './components/nada-operations/nada-operations';
import { CommonModule } from '@angular/common';
import { NadaClients } from './components/nada-clients/nada-clients';
import { NadaTargetedMarkets } from './components/nada-targeted-markets/nada-targeted-markets';
import { NadaEnvironmentalImpact } from './components/nada-environmental-impact/nada-environmental-impact';
import { NadaVision2030 } from './components/nada-vision2030/nada-vision2030';
import { NadaFuturePlans } from './components/nada-future-plans/nada-future-plans';
import { NadaWhyWood } from './components/nada-why-wood/nada-why-wood';
import { NadaContactUs } from './components/nada-contact-us/nada-contact-us';
@Component({
  selector: 'app-root',
  imports: [NadaHero,NadaIntro,NadaAbout,NadaVision,NadaMessage,
    NadaValues,NadaProducts,NadaDetails,NadaOperations,NadaClients,
    NadaTargetedMarkets,NadaEnvironmentalImpact,CommonModule,NadaVision2030
  , NadaFuturePlans,NadaWhyWood,NadaContactUs],
    // imports: [RouterOutlet, NadaHero],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('NadaFactory');
}
