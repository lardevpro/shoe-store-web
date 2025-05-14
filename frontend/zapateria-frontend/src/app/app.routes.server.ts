import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  { 
    path: 'catalog',
    renderMode: RenderMode.Server
  },
  { 
    path: '**',
    renderMode: RenderMode.Server
  }
];
