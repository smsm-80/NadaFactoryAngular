import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .then(() => {
    const scrollSpy = (window as any).bootstrap.ScrollSpy.getOrCreateInstance(document.body, {
      target: '#navbarNav',
      offset: 90
    });

    document.querySelectorAll('.navbar .nav-link').forEach(link => {
      link.addEventListener('click', () => {
        const nav = document.getElementById('navbarNav');
        if (nav) {
          const bsCollapse = (window as any).bootstrap.Collapse.getOrCreateInstance(nav);
          bsCollapse.hide();
        }
      });
    });
  })
  .catch((err) => console.error(err));
