// routerConfig.ts

import { Routes } from '@angular/router';
import { ListPostComponent } from './src/app/list-post/list-post.component';
import { AddPostComponent } from './src/app/add-post/add-post.component';
import { UpdatePostComponent } from './src/app/update-post/update-post.component';

const appRoutes: Routes = [
  { path: 'list', 
    component: ListPostComponent 
  },
  {
    path: 'add',
    component: AddPostComponent
  },
  { path: 'update/:titre',
    component: UpdatePostComponent
  }
];
export default appRoutes;