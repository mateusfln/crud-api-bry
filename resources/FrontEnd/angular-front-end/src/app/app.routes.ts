import { Routes } from '@angular/router';
import { IndexComponent } from './funcionario/index/index.component';
import { ViewComponent } from './funcionario/view/view.component';
import { CreateComponent } from './funcionario/create/create.component';
import { EditComponent } from './funcionario/edit/edit.component';

export const routes: Routes = [
      { path: 'funcionario', redirectTo: 'funcionario/index', pathMatch: 'full'},
      { path: 'funcionario/index', component: IndexComponent },
      { path: 'funcionario/:funcionarioId/view', component: ViewComponent },
      { path: 'funcionario/create', component: CreateComponent },
      { path: 'funcionario/:funcionarioId/edit', component: EditComponent },
      
    //   { path: 'empresa', redirectTo: 'empresa/index', pathMatch: 'full'},
    //   { path: 'empresa/index', component: IndexComponent },
    //   { path: 'empresa/:empresaId/view', component: ViewComponent },
    //   { path: 'empresa/create', component: CreateComponent },
    //   { path: 'empresa/:empresaId/edit', component: EditComponent }
  ];