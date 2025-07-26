import { Routes } from '@angular/router';
import { CharacterList } from './pages/character-list/character-list';
import { CharacterDetail } from './pages/character-detail/character-detail';
import { Home } from './pages/home/home';


export const routes: Routes = [
  { path: 'characters', component: CharacterList },
  { path: 'character/:id', component: CharacterDetail },
  { path: 'home', component: Home },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];