import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';
// import { providePrimeNG } from 'primeng/config';
import { provideRouter } from '@angular/router';
// import Aura from '@primeng/themes/aura';

import { routes } from './app.routes';
// import { MessageService } from 'primeng/api';

export const appConfig: ApplicationConfig = {
  providers: [
     provideZoneChangeDetection({ eventCoalescing: true }),
     provideRouter(routes),
     provideHttpClient(withInterceptorsFromDi(), withFetch()),
        // providePrimeNG({
        //     theme: {
        //     preset: Aura,
        //     options: {
        //       darkModeSelector: false || 'none'
        //     }
        //   }
        // }),
        // MessageService,
        // {
        //     provide: HTTP_INTERCEPTORS,
        //     useClass: AuthInterceptor,
        //     multi: true
        // }

  ]
};
