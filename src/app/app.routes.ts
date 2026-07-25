import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'users',
    loadComponent: () => import('./pages/user-component/user-component').then(m => m.UserComponent)
  },
  {
    path: 'comments',
    loadComponent: () => import('./pages/comment-component/comment-component').then(m => m.CommentComponent)
  },
  {
    path: 'albums',
    loadComponent: () => import('./pages/album-component/album-component').then(m => m.AlbumComponent)
  },
  {
    path: 'todos',
    loadComponent: () => import('./pages/todo-component/todo-component').then(m => m.TodoComponent)
  },
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full'
  }
];
