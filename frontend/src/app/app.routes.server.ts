import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  { path: '', renderMode: RenderMode.Server },        
  { path: 'shoes', renderMode: RenderMode.Server },
  { path: 'bags', renderMode: RenderMode.Server },
  { path: 'accessories', renderMode: RenderMode.Server },
  { path: '**', renderMode: RenderMode.Server }       
];
