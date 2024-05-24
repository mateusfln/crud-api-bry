import { Routes } from '@angular/router';
import { funcionarioIndexComponent } from './funcionario/index/index.component';
import { funcionarioViewComponent } from './funcionario/view/view.component';
import { funcionarioCreateComponent } from './funcionario/create/create.component';
import { funcionarioEditComponent } from './funcionario/edit/edit.component';
import { empresaIndexComponent } from './empresa/index/index.component';
import { empresaViewComponent } from './empresa/view/view.component';
import { empresaCreateComponent } from './empresa/create/create.component';
import { empresaEditComponent } from './empresa/edit/edit.component';

export const routes: Routes = [
      { path: 'funcionario', redirectTo: 'funcionario/index', pathMatch: 'full'},
      { path: 'funcionario/index', component: funcionarioIndexComponent },
      { path: 'funcionario/:funcionarioId/view', component: funcionarioViewComponent },
      { path: 'funcionario/create', component: funcionarioCreateComponent },
      { path: 'funcionario/:funcionarioId/edit', component: funcionarioEditComponent },
      
      { path: 'empresa', redirectTo: 'empresa/index', pathMatch: 'full'},
      { path: 'empresa/index', component: empresaIndexComponent },
      { path: 'empresa/:empresaId/view', component: empresaViewComponent },
      { path: 'empresa/create', component: empresaCreateComponent },
      { path: 'empresa/:empresaId/edit', component: empresaEditComponent }
  ];